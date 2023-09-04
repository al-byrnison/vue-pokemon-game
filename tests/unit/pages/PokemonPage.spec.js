import { mount, shallowMount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage pages', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('should call mixpokemonArray onMount', () => {
      const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)
      expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('should snapshot match after mount component', () => {
      const wrapper = mount(PokemonPage, {
        data() {
            return {
                pokemonArr: pokemons,
				pokemon: pokemons[0],
				showPokemon: false,
				showAnswer: false,
				message: '',
            }
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
    
    
});
