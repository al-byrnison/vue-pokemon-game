<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selectionPokemon', pokemon.id)">
        {{pokemon.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
/* Pokemon Options */
ul {
    list-style-type: none;
  justify-content: center;
  gap: .5rem
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    width: 8rem;
    margin: .5rem;;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}

@media (min-width: 769px) {
  ul {
    display: flex;
  }
}
</style>