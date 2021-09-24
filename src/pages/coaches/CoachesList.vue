<template>
  <h1>coach list</h1>
  <section>
    Filter
  </section>
  <base-card>
    <section>
      <div>
        <button>Refresh</button>
        <router-link class="reg" to="/register">Register As Coach</router-link>
      </div>
      <h2 v-if="noCoaches">No Coaches Yet...</h2>
      <ul v-else>
        <!-- میتوانیم اطلاعت دریافتی از استور را از طریق پراپس به کامپوننتی که قرار است آنها را نمایش دهد بفرستیم -->
        <coach-items
          v-for="coach in coaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :description="coach.description"
          :hourly-rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-items>
        <!-- میتواند مستقیم از استور اطلاعات را دریافت کند -->
        <!-- <coach-items></coach-items> -->
      </ul>
    </section>
  </base-card>
</template>

<script>
import CoachItems from '../../components/coaches/CoachItems.vue';
import { mapGetters } from 'vuex';
export default {
  components: { CoachItems },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['coaches', 'noCoaches'])
    // filteredCoaches(){
    //   return this.$store.getters['coaches/coaches']
    // },
    // noCoaches(){
    //   return this.$store.getters['coaches/noCoaches']
    // }
  }
};
</script>
<style scoped>
div {
  padding: 20px;
  /* background-color: cornflowerblue; */
  margin: 40px 10px;
}
ul {
  list-style: none;
}

a {
  padding: 15px;
  border-radius: 30px;
  text-decoration: none;
  margin: 0px 100px;
  border: 2px solid #000000;
}
.reg{
  padding: 10px;
  color: #23f13f;
  background-color: rgb(22, 7, 110);
  border-radius: 30px;
  text-shadow: 5px 5px 4px black;
}
a:active,
a:hover,
a.router-link-active {
  background-color: rgb(122, 238, 157);
  color: #920000;
  font-size: 1.05rem;
}

button {
  padding: 11px;
  border: 2px solid black;
  border-radius: 20px;
  background-color: cornflowerblue;
  color: bisque;
  font-family: inherit;
  cursor: pointer;
}
</style>
