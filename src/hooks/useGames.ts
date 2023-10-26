import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string; 
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[] // Array of objects
  metacritic: number;
}


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games",
 {params: {
  genres: selectedGenre?.id, 
  platforms: selectedPlatform?.id
}},
 [selectedGenre?.id, selectedPlatform?.id]); //Array of dependencies, when to render the object

export default useGames;