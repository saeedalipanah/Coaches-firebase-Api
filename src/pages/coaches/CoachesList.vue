<template>
  <div>
    <base-card class="coach-list">
      <h1>coach list</h1>
      <router-link class="reg" to="/login" v-if="!isLoggedin">Log in </router-link>
      <router-link class="reg" to="/register" v-if="!isCoach && !isLoading && isLoggedin"
        >Register As Coach</router-link
      >
    </base-card>

    <base-card>
      <div>
        <button @click="loadCoaches()">Refresh</button>
      </div>

      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
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

      <h3 v-else style="text-align: center;">
        No Coaches Yet...
      </h3>
    </base-card>
  </div>
</template>

<script>
import CoachItems from '../../components/coaches/CoachItems.vue';
import { mapGetters } from 'vuex';
export default {
  created() {
    this.loadCoaches();
  },
  components: { CoachItems },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    ...mapGetters(['coaches', 'hasCoaches', 'isCoach','isLoggedin'])
    // filteredCoaches(){
    //   return this.$store.getters['coaches/coaches']
    // },
    // hasCoaches(){
    //   return  this.$store.getters['hasCoaches']
    // }
  },
  methods: {
    async loadCoaches() {
      this.isLoading = true;
      await this.$store.dispatch('loadCoaches');
      this.isLoading = false;
    }
    // ...mapActions(['loadCoaches'])
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
.coach-list {
  display: flex;
  justify-content: space-between;
}
a {
  border-radius: 30px;
  text-decoration: none;
  /* margin: 0px 100px; */
  border: 1px solid #000000;
}
.reg {
  height: max-content;
  padding: 7px;
  margin: auto 0;
  color: white;
  background-color: #3d008d;
  border-radius: 30px;
  box-shadow: 6px 4px px black;
}
a:active,
a:hover,
a.router-link-active {
  background-color: #0076bb;
  color: white;
  font-size: 1.05rem;
}

button {
  padding: 11px;
  border: 1px solid black;
  border-radius: 20px;
  color: rgb(0, 0, 0);
  font-family: inherit;
  cursor: pointer;
}
</style>
