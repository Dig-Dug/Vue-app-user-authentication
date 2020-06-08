<template>
<div>
<div v-if="errorMsg">{{errorMsg}}</div>
  <table>
      <tr><th>Benutzername</th><th>Vorname</th>
      <th>Nachname</th><th>Passwort</th></tr>
      
      <tr><td>{{user.username}}</td>
      <td>{{user.given_name}}</td>
      <td>{{user.surname}}</td>
      <td>{{user.password}}</td></tr>
 </table>
  <button @click="edit">Bearbeiten</button><button @click="remove">Entfernen</button>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "User",
  data() {
    return {
      user: {},
      errorMsg: '',
    };
  },
  created() {
    this.axios
      .get("http://localhost:8000/api/" + this.$route.params.id)
      .then(response => {
        this.user = response.data.response;
      })
      .catch(error =>{
            this.errorMsg = error.message;
      })
  },
  methods: {
    remove: function (){
    let test = window.confirm('MÃ¶chten Sie den Benutzer mit dem ' +
    'Benutzernamen ' + this.user.username + 'wirklich lÃ¶schen?');
    if(test){
      this.axios.delete('http://localhost:8000/api/'  + this.user.id)

      .then(response => {
        this.$router.push({name: 'home'});
      })
      .catch(error => {
        this.errorMsg = error.message;
      })
    }
    
    },
  edit: function(){
    this.$router.push({name:'user-form', params:{id: this.user.id}});
  }
  }
}
</script>
