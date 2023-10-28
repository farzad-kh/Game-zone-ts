import { useContext } from "react";
import GameCard from "../module/GameCard";

import {
  Box,
  SimpleGrid,
  UnorderedList,
  Text,
  Alert,
} from "@chakra-ui/react";
import GameCardSkeleton from "../module/GameCardSkeleton";
import { SelectGenresContext } from "../context/SelectGenresPro";
import { useGames } from "../../hooks/useGames";

import Paginations from "../layout/Paginations";
import {
  useGenresStore,
  usePageStore,
  useSearchStore,
} from "../../state-managment/store";

const GameGrid = () => {
  const { selectedPlatform } = useContext(SelectGenresContext);
  const genres = useGenresStore((s) => s.genres);
  const searchGame = useSearchStore((s) => s.searchGame);
  const currentPage = usePageStore((s) => s.currentPage);

  const { data, error, loading} = useGames(
    genres,
    selectedPlatform,
    currentPage,
    searchGame
  );


  const skeletons = [];
  const numberOfSkeletons = 15;

  for (let i = 1; i <= numberOfSkeletons; i++) {
    skeletons.push(i);
  }

  return (
    <>
      <UnorderedList margin={0} minH={"150vh"}>
        <SimpleGrid
          className="gr"
          columns={{
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
          }}
          paddingBottom={"3rem"}
          marginY={"6"}
          spacing={10}
        >
          {loading ? (
            skeletons.map((skeleton, i) => (
              <Box key={i} borderRadius={10} overflow="hidden">
                <GameCardSkeleton key={skeleton} />
              </Box>
            ))
          ) : data.length > 0 && !error ? (
            data.map((item, index) => (
              <GameCard key={item.id} game={item} index={index} />
            ))
          ) : (
            <Alert background={"grey.500"} display={"inline-block"}>
              <Text fontWeight={"semibold"} fontSize={"2xl"} color={"red.100"}>
                Cant find any results!
              </Text>
            </Alert>
          )}
        </SimpleGrid>
      </UnorderedList>
      {data.length > 0 && <Paginations />}
    </>
  );
};

export default GameGrid;
