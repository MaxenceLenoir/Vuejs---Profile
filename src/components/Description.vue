<template>
  <div class="container">
    <section id="about" >
      <h2>{{ $t('about-me') }}</h2>
      <div class="card-pres">
        <div class="image-char5">
          <img alt="Vue personnage" v-bind:src="require(`@/assets/images/character_5.svg`)">
        </div>
        <img alt="Vue macbook" class="image-macbook" v-bind:src="require(`@/assets/images/MacBook.png`)">
        <div class="card-pres-intro mb-5">
          <img alt="My pic" class="card-pres-av" v-bind:src="require(`@/assets/images/profile-pic.jpeg`)">
          <div class="text-paragraphe">{{ $t('description_first') }}<a href="https://www.lewagon.com" class="without-decoration color-orange"> Le Wagon</a> {{ $t('description_second') }}</div>
        </div>
        <div class="motivation">
          <div class="text-motivation"> {{ $t('Iam') }}</div>
          <div class="grid-motiv">
              {{ $t('motivation') }} <font-awesome-icon icon="check-circle" size="1x"/>
              {{ $t('curious') }} <font-awesome-icon icon="check-circle" size="1x"/>
              {{ $t('fast-learner') }} <font-awesome-icon icon="check-circle" size="1x"/>           
              {{ $t('challenges') }} <div class="loader"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Descritpion'
}
</script>
