
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";
import GameGrid from "../template/GameGrid";
import GenreList from "../template/GenreList";
import PlatformSelector from "../module/PlatformSelector";
import TitleGenreP from "../module/TitleGenreP";
import Footer from "./Footer";

const GridContainer = () => {
  return (
    <Grid
      id="c"
      position={"relative"}
      overflow={"hidden"}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
      gridTemplateColumns={{
        base: "minmax(0,4fr)",
        lg: " 200px minmax(0,4fr);",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem
          marginTop={14}
          area={"aside"}
          className="aside-sticky-overflow"
          display={"flex"}
          justifyContent={"center"}
        >
          <GenreList />
        </GridItem>
      </Show>

      <GridItem px="6" area={"main"}>
        <div className="flex-col">
          <TitleGenreP />
          <PlatformSelector />
          <GameGrid />
        </div>
      <Footer/>
      </GridItem>
    </Grid>
  );
};

export default GridContainer;
