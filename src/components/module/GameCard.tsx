import { useState } from "react";
import { Game } from "../../hooks/useGames";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import PlatformiconList from "../module/PlatformiconList";
import CriticScore from "./CriticScore";
import ReleasedGame from "./ReleasedGame";

interface Props {
  game: Game;
  index: number;
}
import logo from "../../assets/bg-onload.jpg";
const GameCard = ({ game, index }: Props) => {
  const { name, background_image } = game;
  const [onload, setOnload] = useState(true);
  const cropBackgroundImage =
    background_image !== null
      ? `https://media.rawg.io/media/crop/600/400/${background_image
          ?.split("/")
          ?.slice(4)
          ?.join("/")}`
      : "";
  
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: index * 0.1, duration: 0.3, type: "spring" },
      }}
    >
      <Card borderRadius={10} overflow={"hidden"}>
        <Image
          onLoad={() => setOnload(false)}
          aspectRatio={"16/10"}
          src={
            onload ? logo : !cropBackgroundImage ? logo : cropBackgroundImage
          }
          borderRadius={"0 0 6px 6px"}
          boxShadow={"0 0px 22px rgba(0,0,0,0.8)"}
          className="bg-game-tumb"
        />
        <CardBody
          gap={2}
          display={"flex"}
          flexDirection={"column"}
          padding={"1rem"}
        >
          <Heading
            fontSize={{
              lg: "16px",
              sm: "sm",
            }}
          >
            {name}
          </Heading>
          <VStack alignItems={"left"}>
            <HStack
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              marginTop={"0.4rem"}
            >
              <PlatformiconList
                platforms={game.parent_platforms?.map((p) => p.platform)}
              />
              <CriticScore metacritic={game.metacritic} />
            </HStack>
            <ReleasedGame released={game.released} />
          </VStack>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default GameCard;
