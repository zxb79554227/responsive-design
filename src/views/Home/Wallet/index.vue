<template>
  <div>
    <div class="wallet-info">
      <v-tabs dark background-color="transparent" hide-slider>
        <v-tab>托管钱包</v-tab>
        <v-divider inset dark vertical></v-divider>
        <v-tab>
          <template>
            <v-icon disabled>mdi-plus</v-icon>
          </template>
        </v-tab>
      </v-tabs>
      <v-divider inset dark></v-divider>
      <v-tabs-items v-model="tab" dark class="px-3 py-8">
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" sm="5">
            <div class="text-caption text--darken-6">账户余额</div>
            <div class="text-h5">¥12323.99</div>
          </v-col>
          <v-divider inset vertical></v-divider>
          <v-col cols="12" sm="5" class="hidden-sm-and-down">
            <div class="text-caption text--darken-6">账户地址</div>
            <div class="text-h6">dkljfslkdrfjsdfo012499</div>
          </v-col>
        </v-row>
      </v-tabs-items>
    </div>
    <div class="mt-6 mb-3 text-h6 font-weight-bold">币种列表</div>
    <!-- <v-card class="coins-list mt-1" outlined>
            <v-list-item>
                <v-list-item-avatar >
                <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-row align="center" justify="center" class="text-center">
                        <v-col  cols="2">
                            <div>BTC</div>
                            <div class="text-caption hidden-sm-and-down">比特币</div>
                        </v-col>
                        <v-col  cols="2">
                             <div class="text-body-2">232.13</div>     
                        </v-col>
                        <v-col  cols="2">
                              <div class="text-body-2"><span class="text-caption">¥</span>100023.32 </div>                  
                        </v-col>
                        <v-col  cols="2">
                              <div class="text-body-2"><span class="text-caption">¥</span>100023.32 </div>
                        </v-col>
                        <v-col  cols="4">
                            <v-btn small dark class="mx-1">提币</v-btn>
                            <v-btn small dark  class="mx-1"> 冲币</v-btn>
                        </v-col>
                    </v-row>
                </v-list-item-content>
            </v-list-item>
    </v-card>-->
    <v-card class="coins-list mt-1" v-for="i in coins" :key="i.id" @click="getCoinInfo(i.id)">
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="i.icon"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-row class="text-left">
            <v-col cols="6">
              <div class="text-body-1">{{i.name}}</div>
            </v-col>
            <v-col cols="6">
              <div class="text-caption">{{i.balance}}</div>
            </v-col>
            <v-col cols="6">
              <div class="text-caption">
                <span class="text-caption">¥</span>
                {{i.coin_asset}}
              </div>
            </v-col>
            <v-col cols="6">
              <div class="text-caption">
                <span class="text-caption">¥</span>
                {{i.country_rate}}
              </div>
            </v-col>
            <!-- <v-col  cols="4">
                <v-btn small dark class="mx-1">提币</v-btn>
                <v-btn small dark  class="mx-1"> 冲币</v-btn>
            </v-col>-->
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import walletService from "@/service/wallet.js";
export default {
  data() {
    return {
      tab: "1",
      coins: [],
      isMobile: null,
    };
  },
  mounted() {
    this.getCoins();
  },
  methods: {
    async getCoins() {
      const { COIN_LIST } = walletService;
      await this.appService(COIN_LIST).then((res) => {
        if (res.data) {
          this.coins = res.data.list;
        }
      });
    },
    getCoinInfo(e) {
      console.log(e);
      this.navigatingTo(`/home/wallet/${e}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.wallet-info {
  .v-tab.v-tab {
    background: #313244;
  }
  .theme--dark.v-tabs-items {
    background-color: #313244;
    color: white;
  }
}
.coins-list {
  .v-list-item__content {
    padding: 12px;
  }
  .col {
    padding: 0.25rem;
  }
}
</style>