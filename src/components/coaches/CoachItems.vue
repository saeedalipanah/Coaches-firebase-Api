<template>
  <li>
    <!-- میتوان اطلاعات دریافتی از طریق پراپس را نمایش داد -->
    <h3>Coach Name : {{ firstName }} {{ lastName }}</h3>
    <h3>Hourly Rate : {{ hourlyRate }} hours</h3>
    <div>
      Areas:
      <span v-for="area in areas" :key="area">
        {{ area }},
      </span>
    </div>
    <div>
      <router-link to="/coaches/:id">Details</router-link >
      <router-link to="/coaches/:id/contact">Contact</router-link >
    </div>

    <!-- میتوان مستقیم از استور اطلاعات را دریافت کرد و نمایش داد
  <h1 v-for="coach in coaches" :key="coach"> {{coach.firstName}} </h1> -->
  </li>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  props: ['id', 'firstName', 'lastName', 'description', 'areas', 'hourlyRate']
  // computed: {
  //   ...mapGetters(['coaches'])
  // }
};
</script>
<style scoped>
li {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
}
div{
  margin: 15px;
}
a {
  padding: 5px;
  text-decoration: none;
  margin: 10px;
  border: 1px solid #000000;
}
a:active,
a:hover,
a.router-link-active {
  background-color: white;
  color: #920000;
  font-size: 1.05rem;
}
</style>
