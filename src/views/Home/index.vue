<template>
      <div>
      <v-navigation-drawer
          v-if="drawer"
          color="#313244"
          :disable-resize-watcher='true'
          permanent
          app
          dark
        >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line >
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
              <v-list-item-subtitle>Subtext</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item
          class="pa-4"
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
              <template v-slot:append>
        <div class="pa-5">
          <v-btn block>Logout</v-btn>
        </div>
        </template>
      </v-navigation-drawer>
      <v-app-bar app v-if="navBar" height="125px" color='#313244' dark>
          <v-row>
              <v-col cols="12">
                <v-avatar
                  size="42px"
                >
                  <img
                    alt="Avatar"
                    src="https://randomuser.me/api/portraits/men/81.jpg"
                  >
                </v-avatar>
                <span class="px-2 text-body-2"><span class="white--text text--darken-3">UID:</span>13013370014</span>
                <v-btn class="float-right" dark>Logout</v-btn>
              </v-col>
              <v-col cols="12">
                    <v-tabs background-color='transparent' hide-slider right show-arrows>
                      <v-tab v-for="item in items" :key="item.title" right>{{item.title}}</v-tab>
                    </v-tabs>
              </v-col>
          </v-row>
      </v-app-bar>
      <!-- Sizes your content based upon application components -->
        <v-main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-main>
      </div>
</template>

<script>

import desknav from '../../components/deskNavBar'
export default {
  name:'home',
  data(){
    return{
          drawer:true,
          navBar:false,
          isMobile:Boolean,
          items: [
          { title: '我的钱包', icon: 'mdi-view-dashboard',path:'wallet' },
          { title: '应用探索', icon: 'mdi-image',path:'discovery' },
          { title: '市场资讯', icon: 'mdi-help-box', path:'market' },
        ],
    }
  },
  // components: {
  //   'desk-nav-bar':desknav
  // },
  beforeMount(){
    this.setAppFrame()
  },
  mounted(){
    console.log(this.$vuetify);
  },
  methods:{
    setAppFrame(){
      let isMobile = this.$vuetify.breakpoint.xs === true? true:false;
      if(isMobile){
        this.drawer = false
        this.navBar = true
      }
    }
  }
}
</script>

<style>

</style>
