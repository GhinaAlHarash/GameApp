import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface games {
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  background_image: string;
}

const useGames = () => {
  const { data: games, error, isLoading } = useData<games>("/games");
  return { games, error, isLoading };
};

export default useGames;
