const userSverice = {
    PHONE_CHECK:{
        path:'/v1/user/is-reg',
        method:'post',
        authorization : false
    },
    SEND_CODE:{
        path:'/backend/send/sms',
        method:'post',
        authorization : false 
    },
    USER_LOGIN:{
        path:'/v1/user/login',
        method:'post',
        authorization : false 
    }

}
 
export default userSverice