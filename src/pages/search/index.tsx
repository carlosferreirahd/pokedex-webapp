import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PokemonCard } from "@components/pokemon-card";
import ArrowLeft from "@components/ui/icons/arrow-left";
import cn from "@utils/cn";

export default function Search() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const searchText = useMemo<string>(() => searchParams.get("pokemon") || "", [searchParams]);

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h3 className="text-base-content text-3xl font-bold mb-8 border-b pb-2">
        <button
          className="btn btn-ghost btn-circle"
          aria-label="Go back to previous page button"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft
            className="size-5 inline-block align-middle"
            aria-label="Arrow left icon"
          />
        </button> Results for: {searchText}
      </h3>
      <div
        className={cn(
          "flex-grow-0 flex-shrink-0 px-3 mx-auto animate-fade-right animate-once",
          "basis-full max-w-full",
          "sm:basis-1/2 sm:max-w-[50%]",
          "lg:basis-1/3 lg:max-w-[33.333333%]",
        )}
      >
        <PokemonCard pokemonName={searchText} />
      </div>
    </div>
  );
}
