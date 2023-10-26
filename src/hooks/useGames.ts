import { GameQuery } from "../App";
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


const useGames = (gameQuery: GameQuery) => useData<Game>("/games",
 {params: {
  genres: gameQuery.genre?.id, 
  platforms: gameQuery.platform?.id
}},
 [gameQuery]); //Array of dependencies, when to render the object

export default useGames;