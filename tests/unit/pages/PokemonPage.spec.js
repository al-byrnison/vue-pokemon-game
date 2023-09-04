import { mount, shallowMount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage pages', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallowMount(PokemonPage)
	})

	test('should call mixpokemonArray onMount', () => {
		const mixPokemonArraySpy = jest.spyOn(
			PokemonPage.methods,
			'mixPokemonArray'
		)
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
			},
		})
		expect(wrapper.html()).toMatchSnapshot()
	})

	test('should show componets PokemonPicture and PokemonOptions', () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[1],
					showPokemon: false,
					showAnswer: false,
					message: '',
				}
			},
		})

		const picture = wrapper.find('pokemon-picture-stub')
		const options = wrapper.find('pokemon-options-stub')

		expect(picture.exists()).toBeTruthy()
		expect(options.exists()).toBeTruthy()

		expect(picture.attributes('pokemonid')).toBe('2')
		expect(options.attributes('pokemons')).toBeTruthy()
	})

	test('should checkAnswer', async () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showPokemon: false,
					showAnswer: false,
					message: '',
				}
			},
		})
		//console.log(wrapper.vm)
		await wrapper.vm.checkAnswer(1)
		expect(wrapper.find('h2').exists()).toBeTruthy()
		expect(wrapper.vm.showPokemon).toBeTruthy()
		expect(wrapper.find('h2').text()).toBe(
			`Correcto el pokemon es ${pokemons[0].name}`
		)
	})

	test('should checkAnswer (bad answer)', async () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showPokemon: false,
					showAnswer: false,
					message: '',
				}
			},
		})

		await wrapper.vm.checkAnswer(6)
		expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[0].name}`)
	})
})
