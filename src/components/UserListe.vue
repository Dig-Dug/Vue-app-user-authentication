<template>
<div>
 <ul>
<li v-for="user in users" :key="user.id">
    <a v-bind:href="'user/' + user.id">{{user.username}}</a>
</li>

 </ul>
 <button @click="addUser">Neuen Benutzer hinzufÃ¼gen</button>
 </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default{
    name: 'UserListe',
   data: function(){
       return {
           users: []
       }
   },
   created(){
       
       this.axios.get('http://localhost:8000/api')
       .then(response => {
           this.users = response.data.response;
           
       })
       .catch(error => {
           console.log(error)
           this.result = error.message;
       })
   },
   methods: {
       addUser: function(){
           this.$router.push('user-form');
       }
   }
}

</script>
<style scoped>
    li {
        list-style:none;

    }
</style>