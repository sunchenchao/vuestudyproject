<template>
    <div id="home">
        <NavBar style="height: 44px">
            <div slot="center">首页</div>
        </NavBar>
            <tab-control ref="tabcontrolcopy" v-show="controllIsShow" class="tabcontrolcopy" :titles="['推荐','喜欢','热门']" @tabCheck="tabCheck"></tab-control>
        <scroll ref="scroll" class="content" :numtype="3" @ShowAndDie="ShowAndDie" @UpMore="UpMore">
            <HomeSwiper @imageover="ImageOver()"  :banner="banner"></HomeSwiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control ref="tabcontrol" class="tabcontrol" :titles="['推荐','喜欢','热门']" @tabCheck="tabCheck"></tab-control>
            <good-list :goodList="getCurrentyTpye"></good-list>

        </scroll>
        <back-top v-show="controlTopIsShow" class="backtop" @click.native="GoToTop()"></back-top>




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

    import {backTopMinxin} from "@/common/mixin"


    export default {
        name: "Home",
        mixins:[backTopMinxin],
        components:{
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodList,
            Scroll,
          

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
                },
                controllIsShow:false,
                saveY:0,
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
                this.$refs.tabcontrol.currentIndex = index;
                this.$refs.tabcontrolcopy.currentIndex = index;

            },

            ShowAndDie(postion) {
                console.log(postion);
                if (postion.y<-1000){
                    this.controlTopIsShow = true;
                }else {
                    this.controlTopIsShow =false;
                }
                if(postion.y<-590){
                    this.controllIsShow = true;
                }else{
                    this.controllIsShow = false;
                }
            },
            UpMore(){
                this.getHomeGoods(this.currentName);
                this.$refs.scroll.Finish();
                //应为不知道真实的高度所有在加载完成之后就是需要使用refresh
                this.$refs.scroll.scroll.refresh();

            },
            ImageOver(){
                console.log(this.$refs.tabcontrol.$el.offsetTop);
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
        },
        mounted() {
        },
        //销毁函数
        destroyed(){
            console.log("销毁");
            
        },
        activated(){
            this.$refs.scroll.GoToTop(0,this.saveY,0);
            
        },
        deactivated(){
            this.saveY =this.$refs.scroll.scroll.y;
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
        /*margin-top: 44px;*/
        height: calc(100% - 93px);
        /*overflow: hidden;*/
        position: absolute;
        top: 44px;
        left: 0px;


    }
    .tabcontrolcopy{
        position: relative;
        z-index: 12;
    }



</style>