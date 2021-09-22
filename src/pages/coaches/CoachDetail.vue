<template>
  
  <h1>Detail For Coach</h1>
  <router-view></router-view>
  <router-link to="/coaches/c1/contact">Contact With Coach</router-link>
</template>

<style scoped>
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
</style>
