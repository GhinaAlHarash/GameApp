import React from "react";
import { HStack, Stack, Image, Input, Text, Textarea } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";

const Nav = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Stack padding={'10px'}>
        <Image src={logo} boxSize={"50px"} />
        <Text fontSize="md" fontFamily="Quicksand">
          {" "}
          Gamee
        </Text>
      </Stack>
        <Input variant='filled' placeholder='search'/>
      <DarkModeSwitch />
    </HStack>
  );
};

export default Nav;
