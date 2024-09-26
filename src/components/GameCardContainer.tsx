import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={{sm:"200px",base:"300px",lg:"300px"}} overflow="hidden" borderRadius={20}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
