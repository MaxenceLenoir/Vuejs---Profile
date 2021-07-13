<template>  
  <div class="banner-languages">
    <div v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
      <img alt="Vue logo" v-bind:src="require(`@/assets/images/${locale}.png`)" class="icon-flag">
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'ButtonLanguage',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    return { t }
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.locales = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',').filter((lang) => lang !== this.$i18n.locale)
      }
    }
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
        .filter((lang) => lang !== this.$i18n.locale)
    }
  }
})
</script>

<style>
  .banner-languages {
    width: 140px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    right: 5px;
    top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .icon-flag {
    width: 60px;
    height: 40px;
    border-radius: 4px;
  }
</style>