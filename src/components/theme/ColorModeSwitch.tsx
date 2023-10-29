import { useColorMode, Switch, HStack, Text } from "@chakra-ui/react";
const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "dark" && true}
      ></Switch>
      <Text fontSize={{sm:"1rem",base:"0.85rem"}}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
