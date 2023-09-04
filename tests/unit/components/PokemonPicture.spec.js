import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => {
	test('should snapshot match', () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonId: 1,
				showPokemon: true,
			},
		})
		expect(wrapper.html()).toMatchSnapshot()
	})

	test('should show hidden img pokemon 100', () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonId: 100,
				showPokemon: false,
			},
		})
		const [img1, img2] = wrapper.findAll('img')
		expect(img1.exists()).toBeTruthy()
		expect(img2).toBe(undefined)
		expect(img1.classes('pokemon-hidden')).toBeTruthy()
        
        const srcImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
        expect(img1.attributes('src')).toBe(srcImg)
	})

	test('should show pokemon if showPokemon:true', () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonId: 100,
				showPokemon: true,
			},
		})
		const imgPokemon = wrapper.find('img')
		expect(imgPokemon.exists()).toBeTruthy()

		expect(imgPokemon.classes('pokemon-hidden')).toBeFalsy()
        expect(imgPokemon.classes('fade-in')).toBeTruthy()
	})
})
