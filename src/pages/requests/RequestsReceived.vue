<template>
  <base-card>
    <header>
      Requests Received
    </header>
  </base-card>
  <base-card>
    <div>
      <ul>
        <li v-for="request in requests" :key="request.id">
          <base-card>
            <h4>E-mail: {{ request.email }}</h4>
            <p>Massage: {{ request.massage }}</p>
            <p>ID: {{ request.id }}</p>
          </base-card>
        </li>
      </ul>
    </div>
    <div v-if="noRequests"><h1>You haven't received any requests yet!</h1></div>
  </base-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['requests', 'noRequests'])
  }
};
</script>

<style scoped>
header {
  /* background: red; */
  font-size: x-large;
  /* max-width: max-content; */
  /* margin: 0 auto; */
  text-align: center;
}
ul{
list-style: none;
}
</style>
