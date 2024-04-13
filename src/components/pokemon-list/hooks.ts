import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { pokemonService } from "@services/pokemon";
import { IPokemonList } from "@shared/interfaces/pokemon.interface";

export function usePokemonList() {
  const listQuery = useQuery<IPokemonList>({
    queryKey: ["pokemon-list"],
    queryFn: () => pokemonService.getPaginatedPokemonList(),
    placeholderData: keepPreviousData,
  });

  return { ...listQuery };
}
