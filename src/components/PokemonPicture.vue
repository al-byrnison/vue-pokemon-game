<template>
	<div class="pokemon-container">
		<img
			:src="imgSrc"
			alt="pokemon"
			class="pokemon-hidden"
		/>
		<img
			v-if="showPokemon"
			:src="imgSrc"
			alt="pokemon"
			class="fade-in"
		/>
	</div>
</template>

<script>
	export default {
		props: {
			pokemonId: {
				type: Number,
				required: true,
			},
			showPokemon: {
				type: Boolean,
				required: true,
				default: false,
			},
		},
		computed: {
			imgSrc() {
				return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
			},
		},
	}
</script>

<style scoped>
	/* Pokemon Picture */
	.pokemon-container {
		position: relative;
		height: 12rem;
	}
	img {
		height: 12rem;
    width: 12rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
	}
	.pokemon-hidden {
		filter: grayscale(100%) brightness(0%);
	}
</style>
