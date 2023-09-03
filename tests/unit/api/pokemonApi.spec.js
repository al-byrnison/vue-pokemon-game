import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', () => {
    
    test('axios must be configured with the api', () => {
      expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
    
});
