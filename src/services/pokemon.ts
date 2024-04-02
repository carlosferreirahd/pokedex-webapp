import api from "@services/api";

function service() {
  const resource = "/pokemon";

  async function getPaginatedPokemonList(
    offset: number = 0,
    limit: number = 20
  ) {
    try {
      const response = await api.get(
        `${resource}/?offset=${offset}&limit=${limit}`
      );
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async function getPokemonByName(pokemonName: string) {
    try {
      const response = await api.get(`${resource}/${pokemonName}`);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  return {
    getPaginatedPokemonList,
    getPokemonByName,
  };
}

export const pokemonService = service();
