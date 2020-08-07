<template>
        <v-navigation-drawer width="300px" height="100%" fixed >
            <div class="desk-nav-container d-flex flex-column align-center pa-12 justify-space-around">
                <div class="box-one text-center">
                    <v-avatar tile size="95">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                    </v-avatar>
                    <div class="text-h6 ">供应链金融</div>
                </div>
                <div class="box-two">      
                     <v-select
                     dense
                    :items="items"
                    label="Outlined style"
                    >
                      <v-icon slot="prepend-item">mdi-contain-start</v-icon>
                      </v-select>
                </div>
                <div class="box-three">321321</div>
            </div>
        </v-navigation-drawer>
</template>

<script>
export default {
    props:{
        imgSrc:String,
        items:{
            type:Array,
            default:()=> ['1','2','3']
        }
    }
}
</script>
