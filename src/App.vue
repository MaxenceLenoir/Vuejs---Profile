<template>
  <Banner />
  <ButtonLanguage />
  <Description />
  <Skills />
  <Projects />
  <Game />
  <Footer />
</template>
<script>
  import Banner from './components/Banner.vue'
  import ButtonLanguage from './components/ButtonLanguage.vue'
  import Description from './components/Description.vue'
  import Skills from './components/Skills.vue'
  import Projects from './components/Projects.vue'
  import Game from './components/Game.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Banner,
      ButtonLanguage,
      Description,
      Skills,
      Projects,
      Game,
      Footer
    }
  }
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
