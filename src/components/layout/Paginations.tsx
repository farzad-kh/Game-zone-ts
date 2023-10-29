import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchStore, usePageStore } from "../../state-managment/store";
import { Text } from "@chakra-ui/react";

function Paginations() {
  useEffect(() => {}, []);
  const pages: number = 100;
  const searchGame = useSearchStore((s) => s.searchGame);
  const addPage = usePageStore((s) => s.addPage);
  const currentPage = usePageStore((s) => s.currentPage);
  const increment = usePageStore((s) => s.increment);
  const decrement = usePageStore((s) => s.decrement);

  const addCurrentButton = usePageStore((s) => s.addCurrentButton);
  const currentButton = usePageStore((s) => s.currentButton);

  const numberOfPages: number[] = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  const [sizeWidth, setSizeWidth] = useState(false);
  // Current active button number

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState<any[]>([]);

  const ref = useRef(null);
  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial: string = "...";
    let dotsLeft: string = "...";
    let dotsRight: string = "...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      addCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      addCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      addCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    addPage(currentButton);
  

        window.onresize = () => {
      if (window.innerWidth > 992) {
        setSizeWidth(false);
      } else {
        setSizeWidth(true);
      }
    };
    if (window.innerWidth > 992) {
      setSizeWidth(false);
    } else {
      setSizeWidth(true);
    }
  }, [currentButton, currentPage]);

  const incrementHandler = () => {
    increment();

    scrollHandler();
  };
  const decrementHandler=()=>{
    decrement();

    scrollHandler();
  }

  if (searchGame.length > 0) return null;
  return (
    <div className="pagination-container">
      <a
        href="#game"
        className={`${currentButton === 1 ? "disabled" : ""}`}
        onClick={decrementHandler}
      >
        Prev
      </a>
      <AnimatePresence>
        {!sizeWidth ? (
          arrOfCurrButtons.map((item, index) => (
            <motion.a
              href="#game"
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={index}
              className={`${currentButton === item ? "active" : ""} ${
                item === "..." && "pointer-none"
              }`}
              onClick={() => {
                addCurrentButton(item as number);
                scrollHandler();
              }}
            >
              {item}
            </motion.a>
          ))
        ) : (
          <Text fontWeight={"semibold"} fontSize={"1rem"} margin={"0 10px"}>{currentPage}</Text>
        )}
      </AnimatePresence>
      <a href="#game"
        className={`${
          currentButton === numberOfPages.length ? "disabled" : ""
        }`}
        onClick={incrementHandler}
      >
        Next
      </a>
    </div>
  );
}

export default Paginations;
