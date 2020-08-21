import Vue from 'vue'
import axios from 'axios'
import devUrl from '../config/dev'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

axios.defaults.timeout = 12000
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = devUrl;} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'https://www.production.com';
}

export var appService = async (app,payload)=>{
    console.log(app);
    if(app.method == 'get'){
        return await axios({
            method:'get',
            url:app.path,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }, 
                params:payload
            }).then(res=>{
                if(res.data.code === 200){
                    return res.data
                }else{
                    console.log('链接服务器失败');
                }
            })
    }else if(app.method == 'post'){
        if(app.authorization == false){
            return await axios({
                method:'post',
                url:app.path,
                headers: {
                    'Content-type': 'application/json;charset=UTF-8'
                }, 
                data:payload
                }).then(res=>{
                    if(res.data.code === 200 || res.data.code === 201){
                        return res.data
                    }else{
                        console.log('链接服务器失败');
                    }
                })
        }else{
            console.log(123);
        }
    }
}


