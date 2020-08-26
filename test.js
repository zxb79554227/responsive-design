const walletService = {
    GET_LIST:{
        path:'/interface/explore',
        method:'get',
        authorization : false,
        // header:{
        //    'FZM-PLATFORM-ID':FZMPLATFORMID
        // }
    }
}

//是否需要token
//方法类型
//header长度
const id = 123212323

let md = {
    'FZM-PLATFORM-ID' :id
}
let sm = {
    age :23,
    day: 1919,
    'FZM-PLATFORM-ID' :3
}

let header = Object.assign(md,sm)

console.log('====================================');
console.log(header);
console.log('====================================');