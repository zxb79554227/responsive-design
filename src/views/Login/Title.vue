<template>
  <div>
      <div class="text-h3 font-weight-bold" ref="loginTitle">
          供应链金融
    </div>
      <div class="text-h6 text--secondary">
          Financial Supply Chain 
      </div>
  </div>
</template>

<script>

export default {
    props:{
        titleAnimate:{
            type:String,
            default:'none'
        }
    },
    mounted(){
      this.tilteAnimation(this.titleAnimate)
    },
    methods:{
        tilteAnimation(start){
                if(start==='animate'){
                    const { loginTitle } = this.$refs
                    this.gsap.from(loginTitle, {duration: 1.2, scale:0,opacity:0.5,x:-1000, ease: 'power1'});
                } 
        }
    }

}
</script>

<style>

</style>