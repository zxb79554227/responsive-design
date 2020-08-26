<template>
  <div>
    <v-carousel hide-delimiters continuous max-height="320px">
      <v-carousel-item
        v-for="(item,i) in banners"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import exploreService from "@/service/explore.js";
export default {
  data() {
    return {
      banners: [],
    };
  },
  mounted() {
    const { GET_LIST } = exploreService;
    this.exploreService(GET_LIST).then((res) => {
      console.log(res, "ljsdflsdjflkjsdklfjsd;lfjsadfn..m,sn");
    });
  },
};
</script>

<style>
</style>