import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { pokemonService } from "@services/pokemon";

export function usePokemon(pokemonName: string = "") {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [modalTriggered, setModalTriggered] = useState<boolean>(false);

  const queryResult = useQuery({
    queryKey: ["pokemon-data", pokemonName],
    queryFn: () => pokemonService.getPokemonByName(pokemonName),
  });

  return {
    ...queryResult,
    modalRef,
    modalTriggered,
    setModalTriggered,
  };
}
