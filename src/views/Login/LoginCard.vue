<template>
  <v-card 
  max-width="380px" 
  min-width="320px" 
  class="login-card px-6 py-3" 
  :dark='false' 
  :elevation='6' 
  :loading='false' 
  :shaped='true'
  > 
      <v-card-title class="text-h5 font-weight-blod">
          {{pannelTitle}}
      </v-card-title>
      <v-card-subtitle>
          {{des}}
      </v-card-subtitle>
        <v-card-text class="px-6 py-3">
            <div v-if="pannelMode === 2 || pannelMode === 3">
                    <v-radio-group v-model="radioGroup" row> 
                        <v-radio label="手机登录" value="phone" @click="loginPannelControl(2)"></v-radio>
                        <v-radio label="密码登录" value="password" @click="loginPannelControl(3)"></v-radio>
                    </v-radio-group>
            <v-divider></v-divider> 
            </div>
        <v-text-field
        v-model="account"
        placeholder="输入手机号码"
        maxlength="11"
        :error="errorPhone"
        :counter='11'
        prefix='+86'
        label="手机号"
        @input="accountInput"
        ></v-text-field>

        <v-text-field
            v-model="password"
            v-if="pannelMode === 1 || pannelMode === 3"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.password]"
            :type="show1 ? 'text' : 'password'"
            placeholder="请输入密码"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-if="pannelMode === 1 || pannelMode === 2"
            v-model="msg"
            placeholder="验证码"
          >
            <template #append-outer  v-if="pannelMode === 1 || pannelMode === 2">
                  <v-btn small color="primary" @click="getMsg">获取验证码</v-btn>
            </template>
          </v-text-field>
            <v-checkbox
            v-if="pannelMode === 1 "
            v-model="isAgree"
            class="agree"
            :rules="[rules.required]"
            :label="`同意用户条款`"
            ></v-checkbox>
            <div class="btn-group mt-6">
                <v-btn  color="primary" class="ml-1" v-if="pannelMode === 2 || pannelMode === 3" @click="userLogin">确认</v-btn>
                 <v-btn class="ml-1" v-if="pannelMode !== 0">取消</v-btn>
                <v-btn  color="primary" class="ml-1" v-if="pannelMode === 1">确认</v-btn>
            </div>

        </v-card-text>

  </v-card>
</template>

<script>
import userService from '../../service/user'
export default {
    data(){
        return{
            pannelTitle:'登录',
            des:' 欢迎使用应用',
            account:'',
            rules:{
                required:value => !!value || '必须填写内容.',
                password:(val) => /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(val) ||  "必须是6-16位英文数字组合"
            },
            msg:'',
            errorPhone:false,
            existUser:0,
            password:'',
            isAgree:false,
            show1:false,
            pannelMode:0, //0:手机号码输入，1:注册 2:验证码登录，3:手机密码登录,
            radioGroup:"phone"
        }
    },
    mounted(){
        console.log(this);
    },
    watch:{
    account(newV) {
         if(newV.length!=11 && this.errorPhone === true){
             this.errorPhone = false
         }
     },
    pannelMode(newV) {
        switch (newV) {
            case 0:
            this.pannelTitle = "用户登录";
            break;
            case 1:
            this.pannelTitle = "新用户注册";
            break;
            case 2:
            this.pannelTitle = "手机登录";
            break;
            case 3:
            this.pannelTitle = "密码登录";
            break;
        }
        },
    },
    methods:{
        async accountInput(){
            const { PHONE_CHECK } = userService;
            var telStr = /^[1]([3-9])[0-9]{9}$/;
            this.existUser = 0;
            if (this.account.length === 11) {
                if (!telStr.test(this.account)) {
                    //错误手机格式
                    this.$store.commit('snack/SET_DATA',{content:'输入手机格式有误',color:'error',toggle:true})
                    this.errorPhone = true
                } else {
                    //调登录接口查询用户是否存在
                  let phoneCheck = await this.appService(PHONE_CHECK,{
                    mobile:this.account,
                    area:"86",
	                reg_type:"mobile",
	            })
                //接口查询是否注册并且把结果保存到existUser中:1用户已经注册，0未注册用户
                if (phoneCheck.data.isreg === 1) {
                        this.pannelMode = 2;
                    } else {
                        this.pannelMode = 1;
                    }
                }
            } else {
                this.pannelMode = 0
            }
        },
        loginPannelControl(n){
           this.pannelMode = n
        },
        async getMsg(){
         const { SEND_CODE } = userService;
            await this.appService(SEND_CODE, { mobile: this.account,	codetype:"quick",
	        param:"FzmRandom",	area:"86", }).then((res) => {
                if(res.code === 200){
                    this.$store.commit('snack/SET_DATA',{toggle:true,content:'验证码发送成功'})
                }else{
                    this.$store.commit('snack/SET_DATA',{toggle:true,color:'error drank-1',content:res.message})
                }
            });
        },
        async userLogin(){
            const { USER_LOGIN } = userService
            console.log(this.radioGroup);
            if(this.radioGroup === 'phone'){
                let data ={
                    login_type:'mobile',
                    area:'86',
                    code:this.msg,
                    type:'sms',
                    mobile:this.account

                }
                await this.appService(USER_LOGIN,data).then(res=>{
                    if(res.code === 200){
                        this.$cookies.set('token', res.data.access_token,'3h')   //return this
                        this.$cookies.set('address', res.data.address,'3h')   //return this
                        this.$cookies.set('key', res.data.private_key,'3h')
                        this.$cookies.set('type', res.data.token_type,'3h')
                    }else{
                        this.$store.commit('snack/SET_DATA',{toggle:true,color:'error drank-1',content:'服务器故障，请稍后再试'})
                    }
                 })
            }else{
                let data ={
                    login_type:'mobile',
                    type:'password',
                    mobile:this.account,
                    password:this.password
                } 
                await this.appService(USER_LOGIN,data).then(res=>{
                    if(res.code === 200){
                        this.$cookies.set('token', res.data.access_token,'3h')   //return this
                        this.$cookies.set('address', res.data.address,'3h')   //return this
                        this.$cookies.set('key', res.data.private_key,'3h')
                        this.$cookies.set('type', res.data.token_type,'3h')
                    }else{
                        this.$store.commit('snack/SET_DATA',{toggle:true,color:'error drank-1',content:'服务器故障，请稍后再试'})
                    }
                 })
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
        .btn-group{
           text-align: right;
        }
        .agree{
            text-align: right;
        }
        .v-tab{
            width: 100%;
        }
        .v-input--selection-controls{
            margin-top: 0;
        }
    }
</style>