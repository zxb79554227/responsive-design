<template>
    <v-app>
      <Snack-bar></Snack-bar>
      <Bot-Sheet></Bot-Sheet>
      <router-view></router-view>
    </v-app>
</template>

<script>

export default {
  name: 'App',
  components:{
   'Snack-bar': ()=> import('./components/snackBar'),
   'Bot-Sheet': ()=> import('./components/botSheet')
  }
}
</script>
