const userSverice = {
    PHONE_CHECK:{
        path:'/v1/user/is-reg',
        method:'post',
        authorization : false
    },
    SMG_GET:{
        path:'/backend/send/sms',
        method:'post',
        authorization : false 
    }

}
 
export default userSverice