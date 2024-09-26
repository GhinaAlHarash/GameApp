import { Badge } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  score: number;
}

const Metacritic = ({ score }: Props) => {
    let coloring='yellow';
    if(score>50) coloring='green'
  return (
    <Badge paddingX="5px" paddingY="1px" fontSize="13px" borderRadius="3px" colorScheme={coloring}>
      {score}
    </Badge>
  );
};

export default Metacritic;
