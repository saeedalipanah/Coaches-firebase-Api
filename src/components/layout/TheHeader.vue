<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Coach</router-link></h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li v-if="!isLoggedin"><router-link to="/login">Login</router-link></li>
        <li v-else><router-link to="/requests">Requests</router-link></li>
        <li v-if="isLoggedin" @click="logout"><button>Logout</button></li>
      </ul>
    </nav>
  </header>
  <div class="linear"></div>
</template>
<script>
import { mapGetters,  } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedin'])
  },
  methods: {
    // ...mapActions(['logout']),
    logout() {
      this.$store.dispatch('logout')
      this.$router.replace('/coaches');
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 7rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 2px solid black; */
}
.linear {
  width: 100%;
  height: 5px;
  margin: auto;
  background: linear-gradient(to right, #3d008d, black, #ddb1ee);
}

header a {
  text-decoration: none;
  color: #b0fad5;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  text-shadow: 5px 5px 4px black;

  /* background-color: lawngreen; */
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
  font-size: 35px;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: lightsalmon; */
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
button {
  color: rgb(0, 0, 0);
  font-family: 'Nunito', sans-serif;
}
button:hover,
button:active {
  font-size: 1rem;
}
</style>
