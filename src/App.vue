<template>
  <Banner />
  <ButtonLanguage />
</template>

<script>
  import Banner from './components/Banner.vue'
  import ButtonLanguage from './components/ButtonLanguage.vue'

  export default {
    name: 'App',
    components: {
      Banner,
      ButtonLanguage
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
}
</style>
