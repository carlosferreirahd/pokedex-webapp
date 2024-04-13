export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export type Stat =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

export interface ITypesData {
  type: {
    name: PokemonType;
  };
}

export interface IStatsData {
  base_stat: number;
  stat: {
    name: Stat;
  };
}

export interface ISpritesData {
  front_default: string;
  back_default: string;
}

export interface IPokemonDetails {
  id: number;
  name: string;
  types: Array<ITypesData>;
  weight: number;
  height: number;
  stats: Array<IStatsData>;
  sprites: ISpritesData;
}

export interface IPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{ name: string }>;
}
