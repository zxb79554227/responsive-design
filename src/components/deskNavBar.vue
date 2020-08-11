<template>
        <v-navigation-drawer width="300px" height="100%" absolute dark>
            <div class="desk-nav-container d-flex flex-column align-center pa-12 justify-space-around">
                <div class="box-one text-center">
                    <v-list-item>
                        <v-list-item-content>
                        <v-list-item-title class="title">
                            Application
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            subtext
                        </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    
                </div>
                <div class="box-two">      
                   <v-avatar tile size="95">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                    </v-avatar>
                    <div class="text-h6 white--text">供应链金融</div>
                </div>
                <div class="box-three">
                    <v-list
        dense
        nav
      >
        <v-list-item
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
                </div>
                <div class="nav-footer">copyRight</div>
            </div>
        </v-navigation-drawer>
</template>

<script>

export default {
    data(){
        return{
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        }
    },
    props:{
        imgSrc:String,

    }
}
</script>
