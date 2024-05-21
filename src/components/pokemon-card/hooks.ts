import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { pokemonService } from "@services/pokemon";
import { IPokemonDetails } from "@shared/interfaces/pokemon.interface";
import { AxiosError } from "axios";

export function usePokemon(pokemonName: string = "") {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [modalTriggered, setModalTriggered] = useState<boolean>(false);

  const queryResult = useQuery<IPokemonDetails, AxiosError>({
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
