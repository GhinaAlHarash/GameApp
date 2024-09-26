import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const DarkModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} colorScheme="green"/>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default DarkModeSwitch;
