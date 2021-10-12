<template>
  <div>
    <header>
      <h1>
        Requests Received
      </h1>
    </header>
    <div class="linear"></div>
    <base-card>
      <base-spinner v-if="isLoading"></base-spinner>
      <div v-else-if="!isLoading && noRequests">
        <h1>You haven't received any requests yet!</h1>
      </div>
      <div v-else-if="!isLoading && !noRequests">
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
    </base-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  created() {
    this.loadRequests();
  },

  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    ...mapGetters(['requests', 'noRequests'])
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('loadRequests');
      } catch (error) {
        this.error = error.message || 'Something failed!';
      }
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
header {
  /* background: red; */
  font-size: large;
  /* max-width: max-content; */
  /* margin: 0 auto; */
  text-align: center;
}
ul {
  list-style: none;
}
.linear {
  width: 100%;
  height: 5px;
  margin: auto;
  background: linear-gradient(to right, #442477, black, #ddb1ee);
}
</style>
