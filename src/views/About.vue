<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click.prevent="log">Todos</button>
  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'About',
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters('todos',[
      'completedTodos',
      'getTodoById',
    ])
  },
  methods: {
    log() { console.log('completedTodos',this.completedTodos); },
    // ...mapActions({
    //   fetchTodos: 'fetchTodos', // map `this.fetchTodos()` to `this.$store.dispatch('fetchTodos')`
    // }),
    ...mapActions('todos', {
      fetchTodos: 'fetchTodos',
    }),
  },
  mounted(){
    this.fetchTodos()
  }
}
</script>

<style lang="scss" scoped>
.about {
  button {
    color: blueviolet;
  }
}
</style>
