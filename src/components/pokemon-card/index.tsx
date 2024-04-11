import { useRef } from "react";
import { ErrorMessage } from "@components/error-message";
import { PokemonSprite } from "./sprite";
import { PokemonBadge } from "./badge";
import { DetailsModal } from "./details-modal";
import { usePokemon } from "./hooks";
import { IStatsData, ITypesData } from "@shared/interfaces/pokemon.interface";

interface PokemonCardProps {
  pokemonName: string;
}

export function PokemonCard({
  pokemonName,
}: Readonly<PokemonCardProps>) {

  const {
    data,
    isPending,
    isError,
    error,
    modalTriggered,
    setModalTriggered,
  } = usePokemon(pokemonName);

  const modalRef = useRef<HTMLDialogElement>(null);

  if (isPending) {
    return (
      <div className="flex flex-col gap-4">
        <div className="skeleton h-32 w-full" />
        <div className="flex gap-4 justify-end">
          <div className="skeleton h-4 w-16" />
          <div className="skeleton h-4 w-16" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorMessage
        className="items-start min-h-full"
        errorMessage={error.message}
      />
    );
  }

  const id: number = data?.id;
  const spriteFront: string = data?.sprites?.front_default;
  const spriteBack: string = data?.sprites?.back_default;
  const pokemonTypes: Array<ITypesData> = data?.types;
  const pokemonStats: Array<IStatsData> = data?.stats;
  const weight: number = data?.weight;
  const height: number = data?.height;

  return (
    <>
      <label
        htmlFor={`${pokemonName}-modal-trigger`}
        className="card card-compact bg-base-200 shadow-xl h-full cursor-pointer focus-within:border focus-within:border-primary"
      >
        <input
          id={`${pokemonName}-modal-trigger`}
          className="appearance-none"
          tabIndex={0}
          type="checkbox"
          checked={modalTriggered}
          onChange={(e) => {
            setModalTriggered(e.target.checked as boolean);
            modalRef?.current?.showModal()
          }}
        />
        <div className="px-4 pt-4 flex justify-evenly">
          <PokemonSprite
            className="object-cover"
            src={spriteFront}
            alt={`${pokemonName} front`}
          />
          <PokemonSprite
            className="object-cover"
            src={spriteBack}
            alt={`${pokemonName} back`}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {`#${id} ${pokemonName}`}
          </h2>
          <ul className="card-actions justify-end">
            {pokemonTypes.map(({ type }) => (
              <li key={type.name}>
                <PokemonBadge pokemonType={type.name} />
              </li>
            ))}
          </ul>
        </div>
      </label>
      <DetailsModal
        ref={modalRef}
        pokemonDetails={{
          id,
          name: pokemonName,
          stats: pokemonStats,
          types: pokemonTypes,
          front_image: spriteFront,
          height,
          weight,
        }}
        onClose={() => setModalTriggered(false)}
      />
    </>
  );
}
