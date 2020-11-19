<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <button class="red" @click='handleSignInWithGoogle'>btn</button>
      <b-button @click='handleSignInWithGoogle'>Boots</b-button>
      <b-button @click='handleLogout'>Logout</b-button>
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
// import { auth, google_provider } from '../firebase'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',
  props: {
    msg: String
  },
  methods: {
    handleSignInWithGoogle() {
      console.log('handleSignInWithGoogle ...')
      const google_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(google_provider)

    },
    handleLogout() {
      console.log('handleLogout ...')
      firebase.auth().signOut()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
