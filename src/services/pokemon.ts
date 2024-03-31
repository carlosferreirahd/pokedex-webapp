import api from "@services/api";

function service() {
  const resource = "/pokemon";

  async function getPokemonByName(pokemonName: string) {
    try {
      const response = await api.get(`${resource}/${pokemonName}`);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  return {
    getPokemonByName,
  };
}

export const pokemonService = service();
