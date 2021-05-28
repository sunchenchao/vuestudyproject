<template>
<div id="detail">
    <nav-bar>
        <div slot="left">
            <img class="left-img" src="@/assets/img/common/back.svg">
        </div>
         <div class="center" slot="center">
             <div :class="{active:index == currentIndex}" @click="NowItem(index)" class="nav-item" v-for="(item,index) in title" :key="index">{{item}}</div>
         </div>
         <div slot="right"></div>
    </nav-bar>
    <swiper class="swiperbox">
        <swiper-item v-for="(item,index) in swiperImg" :key="index">
            {{item}}
            <img :src="item">

        </swiper-item>
    </swiper>
    
   

</div>
    
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getGoodDetail } from "@/network/detail.js" 

import {Swiper, SwiperItem} from "@/components/common/swiper"

export default {
    name:"Detail",
    components:{
        NavBar,
        Swiper,
        SwiperItem
    },
    data(){
        return{
            goodiid:null,
            title:["商品","参数","评论","推荐"],
            currentIndex:0,
            swiperImg:[],
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
        NowItem(index){
            this.currentIndex = index;
        },

        /**
         * 网络相关的请求方法
         */
        getGoodDetail(){
            getGoodDetail(this.goodiid).then((res)=>{
                console.log();
                this.swiperImg = res.data.result.itemInfo.topImages;
            })

        }
        

    }
}
</script>

<style scoped>
.left-img{
    margin-top: 10px;
    margin-left: 20px;
}
.center{
    display: flex;
}
.nav-item{
    flex: 1;
}
.active{
    color: pink;
}
.swiperbox{
    height: 400px;
}

</style>