<template>
  <v-card 
  max-width="380px" 
  min-width="290px" 
  class="login-card px-6 py-3" 
  :dark='false' 
  :elevation='6' 
  :loading='false' 
  :shaped='true'

  > 
      <v-card-title class="text-h5 font-weight-blod">
          {{title}}
      </v-card-title>
      <v-card-subtitle>
          {{des}}
      </v-card-subtitle>
        <v-card-text class="px-6 py-3">
        <v-text-field
        v-model="account"
        placeholder="输入手机号码"
        maxlength="11"
        :error="errorPhone"
        :counter='11'
        prefix='+86'
        label="账号"
        @input="accountInput"
        ></v-text-field>
        </v-card-text>

  </v-card>
</template>

<script>
export default {
    data(){
        return{
            title:'登录',
            des:' 欢迎使用供应链金融系统，请使用手机号登录应用',
            account:'',
            errorPhone:false,
            existUser:0,
            loginModual:0 //0:手机号码输入，1:密码登录，2:验证码登录，3:没有该用户，手机注册
        }
    },
    mounted(){

    },
    watch:{
     account(newV) {
         if(newV.length!=11 && this.errorPhone === true){
             this.errorPhone = false
         }
     }
    },
    methods:{
        async accountInput(){
            var telStr = /^[1]([3-9])[0-9]{9}$/;
            this.existUser = 0;
            if (this.account.length === 11) {
                if (!telStr.test(this.account)) {
                    //错误手机格式
                    this.$store.commit('snack/SET_DATA',{content:'输入手机格式有误',color:'error',toggle:true})
                    this.errorPhone = true
                    console.log('错误手机格式');
                } else {
                    //调登录接口查询用户是否存在
        
                //接口查询是否注册并且把结果保存到existUser中:1用户已经注册，0未注册用户
                if (this.existUser === 1) {
                    console.log("已经注册", this.existUser);
                    this.loginModual = 1
                } else {
                    console.log("新用户", this.existUser);
                    this.loginModual = 3
                }
                }
            } else {
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-card{
        .v-text-field input{
            letter-spacing: 1.25px;
        }
    }
</style>