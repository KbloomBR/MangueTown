<template>
  <div id="app">
    <UsuariosMenu/>
    <usuarios-contrato/>
     <router-view/>
  </div>
</template>

<script>
import UsuariosMenu from './components/UsuariosMenu.vue'
import UsuariosContrato from './components/UsuariosContrato.vue';

export default {
  name: 'App',
  components: {
    UsuariosMenu,
    UsuariosContrato
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
