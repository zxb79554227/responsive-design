<template>
    <v-app>
      <desk-nav-bar></desk-nav-bar>
      <layout></layout>
    </v-app>
</template>

<script>
import layout from './views/index.vue'
import desknav from './components/deskNavBar'
export default {
  name: 'App',
  components: {
    layout,
    'desk-nav-bar':desknav
  }
}
</script>
