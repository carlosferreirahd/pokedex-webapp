import { Stat } from "@shared/interfaces/pokemon.interface";

export const statNameToAcronym: Record<Stat, string> = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SPA",
  "special-defense": "SPD",
  speed: "SPE",
};
