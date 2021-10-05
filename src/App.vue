<template>
  <the-header></the-header>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <router-view> </router-view> -->
</template>
<script>
import { mapActions } from 'vuex';
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader
  },
  methods: {
    ...mapActions(['autoLogin'])
  },
  created() {
    // this.$store.dispatch('autoLogin')
    this.autoLogin();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap');

html {
  font-family: 'Nunito', sans-serif;
  background: linear-gradient(to right bottom, #3d008d, white);
  min-height: 100vh;
}

body {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
