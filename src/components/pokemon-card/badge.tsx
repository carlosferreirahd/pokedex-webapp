import cn from "@utils/cn";
import { PokemonType } from "@shared/interfaces/pokemon.interface";

interface PokemonBadgeProps {
  pokemonType: PokemonType
}

export function PokemonBadge({
  pokemonType,
}: Readonly<PokemonBadgeProps>) {

  return (
    <div
      className={cn(
        "badge text-base-200 font-semibold",
        {
          "bg-normal": pokemonType === "normal",
          "bg-fire": pokemonType === "fire",
          "bg-water": pokemonType === "water",
          "bg-electric": pokemonType === "electric",
          "bg-grass": pokemonType === "grass",
          "bg-ice": pokemonType === "ice",
          "bg-fighting": pokemonType === "fighting",
          "bg-poison": pokemonType === "poison",
          "bg-ground": pokemonType === "ground",
          "bg-flying": pokemonType === "flying",
          "bg-psychic": pokemonType === "psychic",
          "bg-bug": pokemonType === "bug",
          "bg-rock": pokemonType === "rock",
          "bg-ghost": pokemonType === "ghost",
          "bg-dragon": pokemonType === "dragon",
          "bg-dark": pokemonType === "dark",
          "bg-steel": pokemonType === "steel",
          "bg-fairy": pokemonType === "fairy",
        }
      )}
    >
      {pokemonType}
    </div>
  );
}
