import React from "react";
import {
  useColorMode,
  Switch,
  
  HStack,
 
  Text,
} from "@chakra-ui/react";
const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
 

  return (
    <HStack>
      <Switch 
        onChange={toggleColorMode}
        isChecked={colorMode === "dark" && true}
      ></Switch>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
