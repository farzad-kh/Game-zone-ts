import {
  Button,
  List,
  ListItem,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useGenres } from "../../hooks/useGenres";
import GenreItem from "../module/GenreItem";
import { useGenresStore } from "../../state-managment/store";

const GenreList = () => {
  const { data, loading, error } = useGenres();

  const { colorMode } = useColorMode();
  const clearGenre = useGenresStore((s) => s.clearGenre);
  const genres = useGenresStore((s) => s.genres);
  if (error) return null;

  if (loading) return <Spinner />;

  return (
    <>
      <List >
        <ListItem padding={"10px 0 20px 16px"}>
          <AnimatePresence>
            {Object.keys(genres).length !== 0 && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} style={{ marginBottom: "20px" }}>
                <Button onClick={() => clearGenre()}>Clear</Button>
              </motion.div>
            )}
          </AnimatePresence>
          {data?.map((item) => (
            <GenreItem
              key={item.id}
              name={item.name}
              image_background={item?.image_background}
              slug={item?.slug || ""}
            />
          ))}
        </ListItem>
        <div
          className={`${colorMode === "dark" ? "mask-dark" : "mask-light"}`}
        ></div>
      </List>
    </>
  );
};

export default GenreList;
