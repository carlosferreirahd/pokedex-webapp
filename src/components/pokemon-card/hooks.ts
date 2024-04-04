import { useQuery } from "@tanstack/react-query";
import { pokemonService } from "@services/pokemon";

export function usePokemon(pokemonName: string = "") {
  return useQuery({
    queryKey: ["pokemon-data", pokemonName],
    queryFn: () => pokemonService.getPokemonByName(pokemonName),
  });
}
