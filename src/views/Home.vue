<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>LOGIN WITH VUEJS</p>
    <form>
      <input type="text" placeholder="username" v-model="username"> 
      <input type="password" placeholder="password" v-model="pasword">

    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      username: "noadmin",
      password: "12345"
    }
  },
}
</script>
