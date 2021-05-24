<template>
    <div id="home">
        <NavBar>
            <div slot="center">首页</div>
        </NavBar>
        <scroll class="content">
            <HomeSwiper :banner="banner"></HomeSwiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control class="tabcontrol" :titles="['推荐','喜欢','热门']" @tabCheck="tabCheck"></tab-control>
            <good-list :goodList="getCurrentyTpye"></good-list>
        </scroll>




    </div>
</template>

<script>
    import NavBar from "@/components/common/navbar/NavBar";
    import TabControl from "@/components/content/tabControl/TabControl";
    import GoodList from "@/components/content/goodList/GoodList"
    import Scroll from "@/components/common/scroll/Scroll";

    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";


    import {getHomeMultidata,getHomeGoods} from "@/network/home";


    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodList,
            Scroll

        },
        data(){
            return{
                currentName:"pop",
                banner: {},
                recommends: [],
                goods:{
                    'pop':{
                        page:0,
                        list:[]
                    },
                    'new':{
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
            //获取首页的多个数据
            this.getHomeMultidata();
            this.getHomeGoods("pop");
            this.getHomeGoods("sell");
            this.getHomeGoods("new");
        },
        methods:{
            /**
             * 这个时数据控制相关方法
             * */
            tabCheck(index){
                switch (index) {
                    case 0:
                        this.currentName = "pop";
                        break;
                    case 1:
                        this.currentName = "sell";
                        break;
                    case 2:
                        this.currentName = "new";
                        break;
                }

            },

            /**
             * 这个时网路请求相关方法
             */
            getHomeMultidata(){
                getHomeMultidata().then((res)=>{
                    this.banner = res.data.data.banner;
                    this.recommends = res.data.data.recommend.list;
                })
            },
            getHomeGoods(type){
                this.goods[type].page++;
                getHomeGoods(type,this.goods[type].page).then((data=>{
                    console.log(data.data.data.list);
                    this.goods[type].list.push(...data.data.data.list);
                }))
            }
        },
        computed:{
            getCurrentyTpye(){
                return this.goods[this.currentName].list;
            }
        }

    }
</script>

<style scoped>
    #home{
        /*padding-top: 50px;*/
        /*padding-bottom: 50px;*/
        /*视口高度*/
        height: 100vh;
    }
    .tabcontrol{
        position: sticky;
        top: 44px;
    }
    .content{
        margin-top: 44px;
        height: calc(100% - 93px);
        overflow: hidden;
    }


</style>