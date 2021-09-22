<template>
  <the-header></the-header>
  <router-view></router-view>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap');

html {
  font-family: 'Nunito', sans-serif;
  /* background-color: darkcyan; */
}

body {
  margin: 0;
  /* background-color: darkred; */
}


/* .fade-route-enter-from {
  opacity: 0;
}
.fade-route-enter-active {
  transition: opacity 0.5s ease-out;
}
.fade-route-enter-to {
  opacity: 1;
}
.fade-route-leave-from {
  opacity: 1;
}
.fade-route-leave-active {
  transition: opacity 0.5s ease-in;
}
.fade-route-leave-to {
  opacity: 0;
} */
</style>
