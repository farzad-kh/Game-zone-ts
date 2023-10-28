import { useState } from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useGenresStore } from "../../state-managment/store";
interface Props {
  slug: string;
  image_background: string | null;
  name: string;
  onClickHandler: (arg: boolean) => void
}

const DrawerNav = ({ slug, image_background, name, onClickHandler }: Props) => {
  const [close] = useState(false);



  const addGenre=useGenresStore(s=>s.addGenre)
  const genres=useGenresStore(s=>s.genres)
  
  const onSelectedGenre = (slug: string) => {
    addGenre({ name, image_background, slug });
 
    onClickHandler(!close);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <HStack
        role="group"
        cursor={"pointer"}
        marginBottom={"1.2rem"}
        onClick={() => onSelectedGenre(slug)}
      >
        <Image
          borderRadius={"88px"}
          boxSize={"28px"}
          objectFit={"cover"}
          overflow={"hidden"}
          outline={`${slug === genres?.slug && "2px solid #436eb8"}`}
          src={image_background || ""}
        />
        <Text
          transition={"color 150ms ease"}
          _groupHover={{ fontWeight: "bold" }}
          fontWeight={`${slug === genres?.slug ? "bold" : "semibold"}`}
          fontSize={"14.5px"}
        >
          {name}
        </Text>
      </HStack>
    </motion.div>
  );
};

export default DrawerNav;
