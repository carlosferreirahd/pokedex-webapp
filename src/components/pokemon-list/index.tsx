import { PokemonCard } from "@components/pokemon-card";
import { ErrorMessage } from "@components/error-message";
import { usePokemonList } from "./hooks";
import cn from "@utils/cn";

export function PokemonList() {

  const { data, isPending, isError, error } = usePokemonList();

  if (isPending) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    )
  }

  if (isError) {
    return (
      <ErrorMessage
        className="items-start min-h-full"
        errorMessage={error.message}
      />
    );
  }

  return (
    <div className="w-full h-full">
      <ul className="min-w-0 flex flex-row flex-wrap justify-center gap-y-6 -mx-3">
        {data.results.map(({ name: pokemonName }) => (
          <li
            key={pokemonName}
            className={cn(
              "flex-grow-0 flex-shrink-0 px-3",
              "basis-full max-w-full",
              "sm:basis-1/2 sm:max-w-[50%]",
              "lg:basis-1/3 lg:max-w-[33.333333%]",
              "xl:basis-1/4, xl:max-w-[25%]",
              "2xl:basis-1/5 2xl:max-w-[20%]",
            )}
          >
            <PokemonCard pokemonName={pokemonName} />
          </li>
        ))}
      </ul>
    </div>
  );
}
