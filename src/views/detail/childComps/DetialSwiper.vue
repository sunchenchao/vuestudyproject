<template>
 <swiper class="swiperbox">
        <swiper-item v-for="(item,index) in swiperImg" :key="index">
            {{item}}
            <img :src="item">

        </swiper-item>
    </swiper>
    
</template>
<script>
import {Swiper, SwiperItem} from "@/components/common/swiper"
export default {
    name:"DetialSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        swiperImg:{
            type:Array,
            default:[],

        }
    }

}
</script>
<style scoped>

</style>