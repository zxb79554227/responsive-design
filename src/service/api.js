import Vue from 'vue'
import axios from 'axios'

import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'


Vue.use(VueAxios, axios)
Vue.use(VueCookies)
axios.defaults.timeout = 12000

const appServiceAxios = axios.create({
    baseURL:"http://172.16.100.114:8808",
})
const exploreServiceAxios = axios.create({
    baseURL:"http://172.16.101.45:8983"
})


export const exploreService = async(app,payload,header)=>{
    if(app.authorization === false){
        const formHeader = {
            "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
        const jsonHeader ={
            'Content-type': 'application/json;charset=UTF-8'
        }
        switch(app.method){
            case 'get':
                let head = Object.assign(formHeader,app.header)
                console.log('====================================');
                console.log(head);
                console.log('====================================');
                return await exploreServiceAxios({
                    method:'get',
                    url:app.path,
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                        'FZM-PLATFORM-ID':1
                    },
                    params:payload
                    }).then(res=>{
                        if(res.data.code === 200){
                            return res.data
                        }else{
                            console.log('链接服务器失败');
                    }
                })
        }
    }
}


export var appService = async(app,payload,header)=>{
    if(app.authorization == false){
        const formHeader = {
            "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
        const jsonHeader ={
            'Content-type': 'application/json;charset=UTF-8'
        }
        switch(app.method){
            case 'get':
                return await appServiceAxios({
                    method:'get',
                    url:app.path,
                    headers: Object.assign(formHeader,app.header),
                    params:payload
                    }).then(res=>{
                        if(res.data.code === 200){
                            return res.data
                        }else{
                            console.log('链接服务器失败');
                        }
                    })
            case 'post':
                return await appServiceAxios({
                    method:'post',
                    url:app.path,
                    headers: Object.assign(jsonHeader,app.header),
                    data:payload
                    }).then(res=>{
                        if(res.data.code === 200 || res.data.code === 201){
                            return res.data
                        }else{
                            console.log(res.message);
                        }
                })
        }
    }else{
        const formHeader = {
            "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Authorization": 'Bearer '+ VueCookies.get('token'),
        }
        const jsonHeader ={
            'Content-type': 'application/json;charset=UTF-8',
            "Authorization": 'Bearer '+ VueCookies.get('token'),
        }
        switch(app.method){
            case 'get':
                return await appServiceAxios({
                    method:'get',
                    url:app.path,
                    headers: Object.assign(formHeader,app.header),
                    params:payload
                    }).then(res=>{
                        if(res.data.code === 200){
                            return res.data
                        }else{
                            console.log('链接服务器失败');
                        }
                    })
            case 'post':
                return await appServiceAxios({
                    method:'post',
                    url:app.path,
                    headers: Object.assign(jsonHeader,app.header),
                    data:payload
                    }).then(res=>{
                        if(res.data.code === 200 || res.data.code === 201){
                            return res.data
                        }else{
                            console.log(res.message);
                        }
                })
        }
    }
}

