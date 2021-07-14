<template>
  <div class="container">
    <footer>
      <div class="image-ipad" :style="{backgroundImage: `linear-gradient(to bottom, rgba(14, 20, 40, 0.5), rgba(14, 20, 40, 0.5)), url('${require('../assets/images/iPad.png')}')`}"></div>
      <h3 class="text-center mt-5 mb-2"> {{ $t('contact') }}</h3>
      <ul class="social-icons">
        <li>
          <a href="https://github.com/MaxenceLenoir" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" size="1x"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/maxence-lenoir-30a73b75/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="1x"/>
          </a>
        </li>
        <li>
          <a href="mailto:maxence.lenoir1206@gmail.com" target="_blank">
            <font-awesome-icon icon="envelope" size="1x"/>
          </a>
        </li>
        <li>
          <a @click="phone" @mouseover="digit" @mouseleave="hide">
            <font-awesome-icon icon="phone" size="1x"/>
          </a>
        </li>
      </ul>
      <div :class="{ visible: isVisible }" class="phone-number">{{ number }}</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return ({
      isVisible: false,
      number: "07 61 60 05 52"
    })
  },
  methods: {
    phone() {
      const input = document.body.appendChild(document.createElement("input"));
      input.value = this.number;
      input.select();
      document.execCommand('copy');
      input.parentNode.removeChild(input);
    },
    digit() {
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    }
  }
}
</script>