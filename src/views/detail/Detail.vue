<template>
<div id="detail">
    <nav-bar></nav-bar>
    <detial-swiper :swiperImg="swiperImg"></detial-swiper>
    <detail-base-info :goods="goods" ></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>

</div>
    
</template>
<script>
import NavBar from "@/views/detail/childComps/NavBar.vue"

import {getGoodDetail,Goods,Shop} from "@/network/detail.js" 
import DetialSwiper from '@/views/detail/childComps/DetialSwiper.vue'
import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo.vue'
import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo.vue'

export default {
    name:"Detail",
    components:{
        NavBar,
        DetialSwiper,
        DetailBaseInfo,
        DetailShopInfo,

    },
    data(){
   
            return{
            goodiid:null,
            swiperImg:[],
            goods:{},
            shop:{},
        }
    },
    created(){
        console.log(this.$route.params)
        this.goodiid = this.$route.params.iid;
        this.getGoodDetail();
        
       
    },
    computed:{

    },
    methods:{
       

        /**
         * 网络相关的请求方法
         */
        getGoodDetail(){
            getGoodDetail(this.goodiid).then((res)=>{
                console.log(res);
                this.swiperImg = res.data.result.itemInfo.topImages;
                 this.goods = new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services);
                 this.shop = new Shop(res.data.result.shopInfo)
            })

        }
        

    }
}
</script>

<style scoped>
.swiperbox{
    height: 400px;
}

</style>