<template>
  <li>
    <!-- میتوان اطلاعات دریافتی از طریق پراپس را نمایش داد -->
    <h3>Coach Name : {{ firstName }} {{ lastName }}</h3>
    <h3>Hourly Rate : {{ hourlyRate }} تومان</h3>
    <section>
      <h3 class="area">Areas:</h3>
      <h4>
        <span v-for="area in areas" :key="area">{{ area }} ,</span>
      </h4>
    <!-- <p>ID : {{id}}</p> -->
    </section>

    <div>
      <router-link :to="'/coaches/' + id">Details</router-link>
      <router-link :to="coachContactLink">Contact</router-link>
    </div>

    <!-- میتوان مستقیم از استور اطلاعات را دریافت کرد و نمایش داد
  <h1 v-for="coach in coaches" :key="coach"> {{coach.firstName}} </h1> -->
  </li>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  props: ['id', 'firstName', 'lastName', 'description', 'areas', 'hourlyRate'],
  computed: {
    // ...mapGetters(['coaches'])
    // coachDetailsLink(){
    //   return '/coaches/' + this.id
    // }
    coachContactLink() {
      return '/coaches/' + this.id + '/contact';
    }
  }
};
</script>
<style scoped>
li {
  margin: 10px 10px 10px 20px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 4px 6px 20px #3d008d;
  width: 80%;
}
div {
  margin: 15px;
}
a {
  color: white;
  border-radius: 30px;
  padding: 5px 10px;
  text-decoration: none;
  margin: 10px;
  border: 2px solid #000000;
  background-color: #3d008d;
}
a:active,
a:hover,
a.router-link-active {
  background-color: #0076bb;
  color: white;
  font-size: 1.05rem;
}
.area {
  display: inline;
}
h4 {
  display: inline;
}

</style>
