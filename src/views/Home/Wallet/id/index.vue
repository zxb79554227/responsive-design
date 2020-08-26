<template>
  <div class="coin-info">
    <v-icon>mdi-backup-restore</v-icon>
    <v-card class="coin-header">
      <v-avatar size="42px">
        <img alt="Avatar" :src="coin.icon" />
      </v-avatar>
      <div>
        <span>¥</span>
        {{coin.coin_asset}}
      </div>
      <div>
        <span>≈</span>
        {{coin.balance}}
      </div>
    </v-card>
    <div class="btn-group">
      <v-btn>转账</v-btn>
      <v-btn>提款</v-btn>
    </div>
    <div class="trade-history">
      <div class="title">交易历史</div>
    </div>
  </div>
</template>

<script>
import walletService from "@/service/wallet.js";
export default {
  data() {
    return {
      coin: {},
    };
  },
  mounted() {
    this.getCoins(this.$route.params.id).then((res) => {
      this.coin = res[0];
      console.log(this.coin);
    });
  },
  methods: {
    async getCoins(id) {
      const { COIN_LIST } = walletService;
      let coin = await this.appService(COIN_LIST).then((res) => {
        if (res.data) {
          let coinList = res.data.list;
          return coinList.filter((i) => {
            return i.id == id;
          });
        }
      });
      return coin;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>