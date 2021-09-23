<template>
  <h1>coach list</h1>
  <section>
    Filter
  </section>
  <section>
    <div>
      <button>Refresh</button>
      <router-link to="/register">Register As Coach</router-link>
    </div>
    <h2 v-if="noCoaches">No Coaches Yet...</h2>
    <base-card v-else>
      <ul >
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
    </base-card>
  </section>
</template>

<script>
import CoachItems from '../../components/coaches/CoachItems.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import { mapGetters } from 'vuex';
export default {
  components: { CoachItems, BaseCard },
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
  text-decoration: none;
  margin: 0px 100px;
  border: 1px solid #000000;
}
a:active,
a:hover,
a.router-link-active {
  background-color: white;
  color: #920000;
  font-size: 1.05rem;
}

button {
  padding: 11px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: cornflowerblue;
  color: bisque;
  font-family: inherit;
  cursor: pointer;
}
</style>
