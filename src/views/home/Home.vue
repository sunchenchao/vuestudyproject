<template>
    <div id="home">
        <NavBar>
            <div slot="center">首页</div>
        </NavBar>
        <HomeSwiper :banner="banner"></HomeSwiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tabcontrol" :titles="['推荐','喜欢','热门']"></tab-control>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>


    </div>
</template>

<script>
    import NavBar from "@/components/common/navbar/NavBar";
    import TabControl from "@/components/content/tabControl/TabControl";

    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";

    import {getHomeMultidata} from "@/network/home";


    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,

        },
        data(){
            return{
                banner: {},
                recommends: [],
                goods:{
                    'pop':{
                        page:0,
                        list:[]
                    },
                    'news':{
                        page:0,
                        list:[]
                    },
                    'sell':{
                        page:0,
                        list:[]
                    }
                }
            }
        },
        created() {
            getHomeMultidata().then((res)=>{
                console.log(res);
                this.banner = res.data.data.banner;
                this.recommends = res.data.data.recommend.list;
                console.log(this.recommends);
            })

        }
    }
</script>

<style scoped>
    #home{
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .tabcontrol{
        position: sticky;
        top: 44px;
    }


</style>