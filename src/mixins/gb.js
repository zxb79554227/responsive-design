import Vue from 'vue';

Vue.mixin({
    methods:{
        navigatingTo(url,...args){
            const [ arg = {} ] = args
            if ( JSON.stringify(arg) === '{}' ) {
                if(typeof url === 'number'){
                            this.$router.go(url)
                        }else{
                        this.$router.push(url)
                        }
            }else{
                let { query = {}, params = {} } =  arg
                this.$router.push({
                    name:url,
                    query,
                    params
                })
            }
            }
        } 
})