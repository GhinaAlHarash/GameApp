import { HStack } from "@chakra-ui/react";
import React from "react";
import useGenres ,{ genres } from "../hooks/useGenre";

const Genres = () => {
    const {genres}=useGenres();
  return (
    <ul>
        {genres?.map(genre =>(<li>{genre.name}</li>))}
    </ul>
  );
};

export default Genres;
