import { Stat } from "@shared/interfaces/pokemon.interface";

export const statNameToAcronym: Record<Stat, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

export function getValueRange(
  value: number,
  maxValue: number = 255
): "high" | "great" | "medium" | "low" {
  const percentage = (value / maxValue) * 100;

  if (percentage >= 75) return "high";

  if (percentage >= 50) return "great";

  if (percentage >= 25) return "medium";

  return "low";
}
