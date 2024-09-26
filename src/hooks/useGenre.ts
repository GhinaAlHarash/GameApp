import useData from "./useData";

export interface genres {
  id: number;
  name: string;
  background_image: string;
}

const useGenres = () => {
  const { data: genres, error, isLoading } = useData<genres>("/genres");
  return { genres, error, isLoading };
};
export default useGenres;
