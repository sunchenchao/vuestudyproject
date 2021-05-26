<template>
    <swiper>
        <swiper-item v-for="(item,index) in banner.list" :key="item.id">
            <a :herf="item.link">
                <img :src="item.image" @load="ImageOver">
            </a>
        </swiper-item>
    </swiper>
    
</template>

<script>
    import {Swiper,SwiperItem} from "@/components/common/swiper/index.js";
    export default {
        name: "HomeSwiper",
        props:{
          banner:{
              type:Object,
              default(){
                  return {};
              }
          }
        },
        data(){
            return{
                isload:true,
            }
        },
        components:{
            Swiper,
            SwiperItem

        },
        methods:{
            ImageOver(){
                if (this.isload){
                    this.$emit("imageover");
                    this.isload = !this.isload;
                }
            }
        }
    }
</script>

<style scoped>

</style>