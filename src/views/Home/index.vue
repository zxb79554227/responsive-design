<template>
      <div>
        <desk-nav-bar></desk-nav-bar>
        <v-main>
          <layout class="content-box"></layout>
        </v-main>
      </div>
</template>

<script>

import desknav from '../../components/deskNavBar'
export default {
  name:'home',
  components: {
    'desk-nav-bar':desknav
  },
  mounted(){
    
  }
}
</script>

<style>

</style>
