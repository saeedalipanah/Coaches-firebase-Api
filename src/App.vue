<template>
  <the-header></the-header>

  <router-view> </router-view>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap');

html {
  font-family: 'Nunito', sans-serif;
background:linear-gradient(to right bottom,#3d008d,white);


  
/* background: linear-gradient(#e66465, #9198e5); */
/* background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%); */

}

body {
  margin: 0;
  /* background-color: darkred; */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* .fade-router-enter-from {
  opacity: 0;
}
.fade-router-enter-active {
  transition: opacity 0.5s ease-out;
}
.fade-router-enter-to {
  opacity: 1;
}
.fade-router-leave-from {
  opacity: 1;
}
.fade-router-leave-active {
  transition: opacity 0.5s ease-in;
}
.fade-router-leave-to {
  opacity: 0;
} */
</style>
