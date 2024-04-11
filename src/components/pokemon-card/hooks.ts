import { useQuery } from "@tanstack/react-query";
import { pokemonService } from "@services/pokemon";
import { useState } from "react";

export function usePokemon(pokemonName: string = "") {
  const [modalTriggered, setModalTriggered] = useState<boolean>(false);

  const queryResult = useQuery({
    queryKey: ["pokemon-data", pokemonName],
    queryFn: () => pokemonService.getPokemonByName(pokemonName),
  });

  return {
    ...queryResult,
    modalTriggered,
    setModalTriggered,
  };
}
