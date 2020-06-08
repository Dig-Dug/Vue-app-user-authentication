<template>

<div>
    
    <h2>{{title}}</h2>
    <div v-on="errorMsg">{{errorMsg}}</div>
    <table>
    <tr><td><label for="username">Benutzername</label></td>
    <td><input type="text" name="username" id="username" v-model="user.username"/></td></tr>
    <tr><td><label for="given_name">Vorname</label></td>
    <td><input type="text" name="given_name" id="given_name" v-model="user.given_name"/></td></tr>
    <tr><td><label for="surname">Nachname</label></td>
    <td><input type="text" name="surname" id="surname" v-model="user.surname"/></td></tr>
    <tr><td><label for="password">Password</label>
   <td> <tr><input type="text" name="password" id="password" v-model="user.password"/></tr></td>
    <tr><td><button @click="send">Absenden</button></td></tr>
   <td> <tr><button @click="cancel">Abbrechen</button></tr></td>
    </table>
</div>
</template>

<script>
export default {
  name: "UserForm",

  data() {
    return {
      title: "",
      user: {},
      errorMsg: ''
    };
  },
  created() {
    this.title = "Benutzer ";
    if (this.$route.params.id) {
      //edit an user
      this.title += "bearbeiten";
      this.axios
        .get("http://localhost:8000/api/" + this.$route.params.id)
        .then(result => {
          this.user = result.data.response;
        });
    } else {
      //add user
      this.title += "hinzufÃ¼gen";
    }

    this.title += this.$route.params.id ? "bearbeiten" : "hinzufÃ¼gen";
  },
  methods: {
    cancel: function() {
      if (this.$route.params.id) {
        //edit the user
        this.$router.push({
          name: "user",
          params: { id: this.$route.params.id }
        });
      } else {
        // add the user
        this.$router.push({ name: "home" });
      }
    },
    send: function() {
      if (this.$route.params.id) {
         // console.log(this.user);
        //edit the user
        this.axios.post('http://localhost:8000/api/'+ this.user.id,this.user
        )
        .then(result => {
           // console.log(result.request)
            this.$router.push({name: 'user', params: {id:this.user.id}})
        })
        .catch(error =>{
            this.errorMsg = error.nessage;
        })
      }
       else {
        // add the user
        this.axios.post('http://localhost:8000/api', this.user)
        .then(() =>{
              this.$router.push({ name: "home" });
        })
       .catch(error => {
           this.errorMsg = error.message;
       })
      }
    }
  }
};
</script>

