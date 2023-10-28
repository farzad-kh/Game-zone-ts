import {
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
interface Props {
  name: string;
  image_background: string | any;
  slug: string;
}

import { useCurrentButtonStore, useGenresStore, usePageStore } from "../../state-managment/store";
const GenreItem = ({ name, image_background, slug }: Props) => {
  const addCurrentButton=useCurrentButtonStore (s=>s.addCurrentButton)

  const cropBackgroundImage = `https://media.rawg.io/media/crop/600/400/${image_background
    ?.split("/")
    ?.slice(4)
    ?.join("/")}`;
  const addPage = usePageStore((s) => s.addPage);

  const selectHndler = (name: string) => {
    if (name !== genres.name) {
      addGenre({ name, image_background, slug });
      addPage(1);
      addCurrentButton(1);
    }else{
      return
    }
  };

  const addGenre = useGenresStore((s) => s.addGenre);
  const genres = useGenresStore((s) => s.genres);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <HStack
        role="group"
        cursor={"pointer"}
        onClick={() => selectHndler(name)}
        marginBottom={"1rem"}
      >
        <Image
          borderRadius={"88px"}
          boxSize={"28px"}
          objectFit={"cover"}
          overflow={"hidden"}
          outline={`${name === genres.name && "2px solid #436eb8"}`}
          src={cropBackgroundImage}
        />
        <Text
          transition={"color 150ms ease"}
          _groupHover={{ fontWeight: "bold" }}
          fontWeight={`${name === genres?.name ? "bold" : "semibold"}`}
          fontSize={"14.5px"}
        >
          {name}
        </Text>
      </HStack>
    </motion.div>
  );
};

export default GenreItem;
