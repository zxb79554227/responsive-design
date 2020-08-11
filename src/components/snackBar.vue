<template>
    <v-snackbar
    top
        :color='snackbar.color'
      v-model="snackbar.toggle"
    >
      {{snackbar.content}}
      <template v-slot:action="{ attrs }">
        <v-icon @click="closeSnack"  v-bind="attrs">
          mdi-close
        </v-icon>
        <!-- <v-btn
        
          text
          v-bind="attrs"
          @click="closeSnack"
        >
          Close
        </v-btn> -->
      </template>
    </v-snackbar>
</template>

<script>
export default {
    data(){
        return{
            snackbar:this.$store.state.snack
        }
    },
    mounted(){
      console.log(this.snackbar);
        // this.$store.commit('snack/SET_DATA',{content:'123123123',color:'error'})
    },
    methods:{
      closeSnack(){
        this.$store.commit('snack/SET_DATA',{toggle:false})
      }
    }
}
</script>

<style>

</style>