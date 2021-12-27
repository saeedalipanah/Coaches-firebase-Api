<template>
<div>

  <base-card>
    <section>
      <h2>{{ selectedCoach.firstName }} {{ selectedCoach.lastName }}</h2>
      <h2>Hourly Rate : {{ selectedCoach.hourlyRate }} تومان</h2>
    <section>
      <h3 class="area">Areas: </h3>
      <h4>
        <span v-for="area in selectedCoach.areas" :key="area"> {{ area }} ,</span>
      </h4>
    </section >
      <p >description: {{ selectedCoach.description }}</p>
    </section>
    <div>
    <section>
      <h1 class="interested">Interested? Reach Out Now</h1>
      <router-link :to="/coaches/+ id + /contact/">Contact With Coach</router-link>
    <router-view></router-view>
    </section>
    </div>
  </base-card>
</div>
</template>

//
<script>
// import {mapGetters} from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    coaches() {
      return this.$store.getters['coaches'];
      // .find(coach => coach.id === this.id);
    }
  },
  created() {
    this.selectedCoach = this.coaches.find(element => element.id === this.id);
  }
};
</script>

<style scoped>

a {
  padding: 15px;
  text-decoration: none;
  margin: 1rem;
  border-radius: 30px;
  border: 2px solid #000000;
  background-color: #e69a9a;
}
a:active,
a:hover,
a.router-link-active {
  background-color: #68c775;
  color: #920000;
  font-size: 1.05rem;
}
h1 {
  display: inline-block;
}
.area {
  display: inline;
}
p{
  max-width: 100%;
  
}
h4 {
  display: inline;
  
}
.interested{
  padding: 10px;
  color: #23f13f;
  background-color: rgb(22, 7, 110);
  border-radius: 10px;
  text-shadow: 5px 5px 4px black;

}

</style>
