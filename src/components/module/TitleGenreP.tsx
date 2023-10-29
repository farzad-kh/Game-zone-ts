import { useContext } from "react";
import { SelectGenresContext } from "../context/SelectGenresPro";
import { Text, HStack } from "@chakra-ui/react";
import { useGenresStore } from "../../state-managment/store";
const TitleGenreP = () => {
  const { selectedPlatform } = useContext(SelectGenresContext);
  const genres = useGenresStore((s) => s.genres);

  return (
    <HStack id="game" marginTop={5} marginBottom={2}>
      <Text fontSize={{sm:"4xl",base:"3xl"}}>
        {`${Object.keys(genres).length === 0 ? "All":""} ${genres?.name || ""} ${
          selectedPlatform?.name || ""
        }`}{"  "}
        Games
      </Text>
    </HStack>
  );
};

export default TitleGenreP;
