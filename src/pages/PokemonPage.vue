<template>
	<h1 v-if="!pokemon">Esperando...</h1>
	<div
		v-else
		class="container"
	>
		<h1>¿Quién es este Pokemon?</h1>
		<PokemonPicture
			:pokemonId="pokemon.id"
			:showPokemon="showPokemon"
		/>
		<PokemonOptions
			:pokemons="pokemonArr"
			@selectionPokemon="checkAnswer"
		/>
		<div
			v-if="showAnswer"
			class="answer-container"
		>
			<h2 class="fade-in centered">{{ message }}</h2>
			<img
				src="../assets/reload.svg"
				alt="pokemon"
				@click="newGame"
				class="btn-reload"
			/>
		</div>
	</div>
</template>

<script>
	import PokemonPicture from '@/components/PokemonPicture'
	import PokemonOptions from '@/components/PokemonOptions'
	import getPokemonOptions from '@/helpers/getPokemonOptions'

	export default {
		components: { PokemonPicture, PokemonOptions },
		data() {
			return {
				pokemonArr: [],
				pokemon: null,
				showPokemon: false,
				showAnswer: false,
				message: '',
			}
		},
		methods: {
			async mixPokemonArray() {
				this.pokemonArr = await getPokemonOptions()
				const randomInt = Math.floor(Math.random() * 4)
				this.pokemon = this.pokemonArr[randomInt]
			},
			checkAnswer(pokemonId) {
				this.showPokemon = true
				this.showAnswer = true
				if (pokemonId === this.pokemon.id) {
					this.message = `Correcto el pokemon es ${this.pokemon.name}`
				} else {
					this.message = `Oops, era ${this.pokemon.name}`
				}
			},
			newGame() {
				this.showPokemon = false
				this.showAnswer = false
				this.pokemonArr = []
				this.pokemon = null
				this.mixPokemonArray()
			},
		},
		mounted() {
			this.mixPokemonArray()
		},
	}
</script>

<style scoped>
	button {
		margin: 0 auto;
	}
	.answer-container {
		justify-content: center;
	}
	.btn-reload {
		width: 3rem;
		height: 3rem;
	}
</style>
