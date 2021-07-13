<template>
  <div class="banner-curiculum">
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
        <i class="fas fa-code"></i>
        <div class="name">Front-end</div>
      </div>
      <div class="card-fullstack animate__animated animate__fadeIn animate__delay-2s">
        <i class="fas fa-database"></i>
        <div class="name">Back-end</div>
      </div>
      <div class="card-fullstack animate__animated animate__fadeIn animate__delay-3s">
        <i class="fas fa-laptop"></i>
        <div class="name">Web Design</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n'
}
</script>

<style>
  @import './assets/stylesheets/banner.scss';
</style>


