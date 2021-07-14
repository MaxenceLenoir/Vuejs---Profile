<template>
  <div class="banner-curiculum" :style="{backgroundImage: `linear-gradient(to bottom, rgba(14, 20, 40, 0.5), rgba(14, 20, 40, 1)), url('${require('../assets/images/banner.jpg')}')`}">
    <div class="banner-text">
      <div class="banner-title animate__animated animate__backInDown">
        Maxence Lenoir
      </div>
      <div class="banner-subtitle animate__animated animate__backInDown">
        {{ $t('dev')}}
      </div>
    </div>
    <div class="container-fullstack">
      <div class="card-fullstack animate__animated animate__fadeIn animate__delay-1s">
        <font-awesome-icon icon="code" size="3x"/>
        <div class="name">Front-end</div>
      </div>
      <div class="card-fullstack animate__animated animate__fadeIn animate__delay-2s">
        <font-awesome-icon icon="database" size="3x"/>
        <div class="name">Back-end</div>
      </div>
      <div class="card-fullstack animate__animated animate__fadeIn animate__delay-3s">
        <font-awesome-icon icon="laptop" size="3x"/>
        <div class="name">Web Design</div>
      </div>
    </div>
    <a href="#about" class="without-decoration color-orange scroll-down animate__animated animate__pulse animate__infinite">
      <font-awesome-icon icon="angle-double-down" size="1x"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n'
}
</script>

<style lang="scss">
  @import '../../node_modules/animate.css/animate.css';
</style>




