//import Message from '@guandata/guandata-design/lib/message'
import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { games, Platform } from "../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import SkeletonCard from "./SkeletonCard";

const MainTable = () => {
  const { games, error, isLoading } = useGames();
  let skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 2, base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameCardContainer>
              <SkeletonCard key={Skeleton} />
            </GameCardContainer>
          ))}
        {games?.map((item, index) => (
          <GameCardContainer>
            <GameCard isLoading={isLoading} key={index}>{item}</GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainTable;

/*



























  const icons: Platform = { id: 0, name: "Xbox", slug: "xbox" };
  const icons2: Platform = { id: 0, name: "mac", slug: "mac" };

const games: games[] = [
    {
      id: 0,
      name: "game1",
      plateforms: [{ plateform: icons }, { plateform: icons2 }],
      metacritic:80
    },
    { id: 1, name: "game2", plateforms: [{ plateform: icons }],metacritic:50 },
    {
      id: 2,
      name: "game3",
      plateforms: [{ plateform: icons }, { plateform: icons2 }],
      metacritic:50
    },
    { id: 3, name: "game4", plateforms: [{ plateform: icons }],metacritic:50 },
    { id: 4, name: "game5", plateforms: [{ plateform: icons }],metacritic:50 },
    { id: 5, name: "game6", plateforms: [{ plateform: icons }],metacritic:50 },
    { id: 6, name: "game7", plateforms: [{ plateform: icons }],metacritic:50 },
  ];*/
