import { HStack, Icon, Image, Text } from "@chakra-ui/react"
import { RiSearchEyeLine } from "react-icons/ri";
import DarkModeSwitch from "../DarkModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="10px" paddingY={2}>
      
        <DarkModeSwitch />{" "}
      <HStack>
      <Icon
            as={RiSearchEyeLine}
            borderRadius={100}
            boxSize={10}
            padding={2}
            marginRight={5}
            marginTop={1}
          />
          
        
        <Text> سحر الشرق
          </Text>
        <Image bgColor={"black"} boxSize={"45px"} />
          
      </HStack>
    </HStack>
  )
}

export default NavBar