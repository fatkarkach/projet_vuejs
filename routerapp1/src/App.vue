<template>
<!--<h1>main App</h1>-->
<!--  <div class="d-grid gap-2 col-6 mx-auto" id="register">-->
<!--    <img src="./assets/medecin.png">-->
<!--    <button class="btn btn-primary" type="button" id="bt1">Inscription</button>-->
<!--     <button class="btn btn-primary" type="button" id="bt2">Connexion</button>-->
<!--  </div>-->
  <router-link :to="{name:'About'}"><button class="btn btn-primary" type="button" id="bt1">Inscription</button></router-link>
  <router-link :to="{name:'Home'}" class="mx-2"><button class="btn btn-primary" type="button" id="bt2">Connexion</button></router-link>
  <button class="btn btn-primary" @click="move()"> Move to about page</button>
  <router-view></router-view>
</template>
<script>
export default{
  methods:{
    move(){
      this.$router.push({name:'About'});
    }
    }
};

</script>
<style>
div#register {
  margin-top: 8%;
  box-shadow: 5px 10px 8px 10px #888888;
  border-radius: 31px;
  padding: 23px;
}
button#bt1 {
  background-color: red;
  border-color:red ;
  font-family: poppins;
  font-weight:bold;
  font-style: italic;
}
button#bt2 {
  background-color: #1396e8;
  border-color:#1396e8 ;
  font-family: poppins;
  font-weight:bold;
  font-style: italic;
}
img
{
  width: 30%;
  margin:auto;
  margin-top: -23px;
}
h1{
  text-align: center;
  margin-top: -18px;
  font-family: poppins;
  font-weight:bold;
  font-style: italic;
}

</style>