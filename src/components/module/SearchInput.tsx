import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { FormEvent } from "react"; // FormEvent از ماژول react استفاده شده است
import { useSearchStore } from "../../state-managment/store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addSearch=useSearchStore(s=>s.addSearch)
  const searchGame=useSearchStore(s=>s.searchGame)
console.log(searchGame);

  const search = (e: FormEvent) => {
    e.preventDefault();
    if (ref?.current) addSearch(ref.current.value);
  };
  const clearInput=()=>{
    addSearch("")
    if (ref?.current) {
      ref.current.value = "";
    }
  }

  return (
    <form style={{ width: "70%" }} onSubmit={search}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          w={"100%"}
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
        {ref?.current?.value&& (
          <Text
          color={"linen"}
            onClick={clearInput}
            fontWeight={"semibold"}
            position={"absolute"}
            right={"20px"}
            top={"6px"}
            cursor={"pointer"}
          >
            Clear
          </Text>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
