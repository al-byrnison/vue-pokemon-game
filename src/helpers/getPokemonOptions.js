import pokemonApi from '@/api/pokemonApi'

export const getPokemons = () => {
	const pokemons = Array.from(Array(650))
	return pokemons.map((item, index) => index + 1)
}

const getPokemonOptions = async () => {
	const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)
	const pokemons = await getPokemonNames(mixPokemons.splice(0, 4))
	return pokemons
}

export const getPokemonNames = async ([a, b, c, d] = []) => {
	// const resp = await pokemonApi.get(`/1`)
	// console.log(resp.data.name);
	// console.log(a, b, c, d)

	const promiseArr = [
		pokemonApi.get(`/${a}`),
		pokemonApi.get(`/${b}`),
		pokemonApi.get(`/${c}`),
		pokemonApi.get(`/${d}`),
	]

	const [pk1, pk2, pk3, pk4] = await Promise.all(promiseArr)
	return [
		{ name: pk1.data.name, id: pk1.data.id },
		{ name: pk2.data.name, id: pk2.data.id },
		{ name: pk3.data.name, id: pk3.data.id },
		{ name: pk4.data.name, id: pk4.data.id },
	]
}

export default getPokemonOptions
