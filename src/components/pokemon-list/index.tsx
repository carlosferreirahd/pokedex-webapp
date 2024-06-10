import { PokemonCard } from "@components/pokemon-card";
import { ErrorMessage } from "@components/error-message";
import { usePokemonList } from "./hooks";
import ChevronDoubleLeft from "@components/ui/icons/chevron-double-left";
import ChevronDoubleRight from "@components/ui/icons/chevron-double-right";
import cn from "@utils/cn";

export function PokemonList() {

  const {
    data,
    isPending,
    isFetching,
    isError,
    error,
    pageNumber,
    isMockedData,
    handleNextPage,
    handlePreviousPage,
  } = usePokemonList();

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
    <div className="w-full h-full flex flex-col gap-16 items-end justify-between animate-fade-up">
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
      <div className="join shadow-xl">
        <button
          className={cn(
            "join-item btn",
            { "btn-disabled": !data?.previous }
          )}
          disabled={!data?.previous}
          aria-label="Go to previous page button"
          onClick={handlePreviousPage}
        >
          <ChevronDoubleLeft
            className="size-4"
            aria-label="Previous page icon"
          />
        </button>
        <button
          className={cn(
            "join-item btn",
            { "btn-disabled": isFetching }
          )}
          disabled={isFetching}
          aria-label="Current page description"
        >
          Page {pageNumber + 1}
        </button>
        <button
          className={cn(
            "join-item btn",
            { "btn-disabled": !data?.next || isMockedData }
          )}
          disabled={!data?.next || isMockedData}
          aria-label="Go to next page button"
          onClick={handleNextPage}
        >
          <ChevronDoubleRight
            className="size-4"
            aria-label="Next page icon"
          />
        </button>
      </div>
    </div>
  );
}
