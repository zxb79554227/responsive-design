<template>
  <v-bottom-sheet v-model="toggleOpen">
      <v-sheet class="text-center pa-6" height="100%">
        <div class="py-3 mt-3 text-h6">This is a title</div>
        <div class="py-3 text-body-2">this is content</div>
        <!-- <v-btn
          class="ma-3"
          text
          color="red"
          @click="sheet = !sheet"
        >close</v-btn> -->
      </v-sheet>
    </v-bottom-sheet>
</template>

<script>
export default {
    data(){
        return{
            toggleOpen:false
        }
    }
}
</script>

<style>

</style>