<template>
  <v-main class="login pa-15">
    <div class="login-bg"></div>
    <div class="login-content-outter">
      <v-row align='center' class="login-content-inner">
        <v-col sm="6" class="text-center">
          <Title></Title>
        </v-col>
         <v-col sm="6" align-self='center'>
           <Login-Card></Login-Card>
         </v-col>
      </v-row>  
    </div> 
  </v-main>
</template>

<script>
export default {
  components:{
    'Title': ()=> import('./Title'),
    'Login-Card':()=> import('./LoginCard')
  }
}
</script>
<style lang="scss" scoped>
    .login {
        position: relative;
        height: 100%;
        width: 100%;
        background-color: yellow;
        .login-content-outter,
        .login-content-inner{
            height: 100%;
            width: 100%;
        }
    }

</style>