import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatforms, { Platform } from "../../hooks/usePlatforms";
import {  useContext } from "react";
import { SelectGenresContext } from "../context/SelectGenresPro";
import {  usePageStore } from "../../state-managment/store";


interface P {
  name: string | null;
  id: number | null;
  slug: string | null;
}

const PlatformSelector = () => {
  const { selectedPlatform, setSelectedPlatform, 
} =
    useContext(SelectGenresContext);
    const addCurrentButton=usePageStore(s=>s.addCurrentButton)
  const { data, error }: P | any = usePlatforms();


  const filterData =
    data.filter(
      (item: Platform) =>
        item?.id === 1 ||
        item?.id === 187 ||
        item?.id === 186 ||
        item?.id === 4 ||
        item?.id === 18 ||
        item?.id === 7 ||
        item?.id === 3
    ) || [];

  if (error) return null;

  const addPage= usePageStore(s=>s.addPage)
const platformHandler=(filterData:P)=>{
  setSelectedPlatform(filterData)
  addPage(1)
  addCurrentButton(1)
}
  return (
    <Menu>
      <MenuButton
        alignSelf={"start"}
        marginBottom={3}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem opacity={"0.5"} onClick={() => setSelectedPlatform(null)}>
          Clear
        </MenuItem>
        {filterData.map((filterData: P) => (
          <MenuItem
            onClick={() => platformHandler(filterData)}
            key={filterData.id}
          >
            {filterData.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
