
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome  Your Vue.js App"/>
    <user-liste/>

   
  </div>
 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import UserListe from '@/components/UserListe.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    UserListe,
  }
}
</script>
