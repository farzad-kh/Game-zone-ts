import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../theme/ColorModeSwitch";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaAlignLeft } from "react-icons/fa";
import { useGenres } from "../../hooks/useGenres";
import DrawerNav from "./DrawerNav";
import SearchInput from "../module/SearchInput";
const Navbar = () => {
  const [sizeWidth, setSizeWidth] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { data} = useGenres();

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 992) {
        onClose();
        setSizeWidth(false);
      } else {
        setSizeWidth(true);
      }
    };
    if (window.innerWidth > 992) {
      onClose();
      setSizeWidth(false);
    } else {
      setSizeWidth(true);
    }
  }, []);



  const onClickHandler = (isClose: boolean): void => {
    isClose ? onClose() : null;
  };
  return (
    <HStack paddingX="1.1rem" justifyContent="space-between" height={"60px"}>
      <AnimatePresence>
        {sizeWidth && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="btn-isOpen" ref={btnRef} onClick={onOpen}>
              <FaAlignLeft className="co" />
            </button>

            <Drawer
              size={"xs"}
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent overflowY={"scroll"}>
                <DrawerCloseButton />

                <div className="drawer">
                  {data?.map((genre) => (
                    <DrawerNav
                      key={genre.id}
                      name={genre.name}
                      slug={genre.slug}
                      image_background={genre.image_background}
                      onClickHandler={onClickHandler}
                    />
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </motion.div>
        )}
      </AnimatePresence>

      {!sizeWidth && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image src={logo} boxSize="60px" />
        </motion.div>
      )}
<SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
