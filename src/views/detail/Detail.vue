<template>
  <div id="detail">
    <nav-bar @NowItem="NowItem"></nav-bar>
    <scroll
      @ShowAndDie="ShowAndDie"
      class="scroll"
      ref="scroll"
      @imageDetail="imgFrash"
    >
      <detial-swiper :swiperImg="swiperImg"></detial-swiper>
      <detail-base-info ref="baseinfo" :goods="goods"></detail-base-info>
      <detail-shop-info ref="shopinfo" :shop="shop"></detail-shop-info>
      <detail-goods-info
        ref="goodsinfo"
        :detailInfo="detailInfo"
      ></detail-goods-info>

      <detail-param-info
        ref="paraminfo"
        :paramInfo="paramInfo"
      ></detail-param-info>

      <detail-commend-info
        ref="commendinfo"
        :commendInfo="commendInfo"
      ></detail-commend-info>
      <good-list ref="goodlistinfo" :goodList="recommend"></good-list>
    </scroll>
    <back-top @click.native="GoToTop()" v-show="controlTopIsShow"></back-top>
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>
<script>
import NavBar from "@/views/detail/childComps/NavBar.vue";

import {
  getGoodDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "@/network/detail.js";
import DetialSwiper from "@/views/detail/childComps/DetialSwiper.vue";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo.vue";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo.vue";
import DetailCommendInfo from "@/views/detail/childComps/DetailCommendInfo.vue";
import GoodList from "@/components/content/goodList/GoodList";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import {backTopMinxin} from "@/common/mixin"



export default {
  name: "Detail",
  mixins:[backTopMinxin],
  components: {
    NavBar,
    DetialSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommendInfo,
    GoodList,
    DetailBottomBar,

  },
  data() {
    return {
      goodiid: null,
      swiperImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commendInfo: {},
      recommend: [],
   
    };
  },
  created() {
    console.log(this.$route.params);
    this.goodiid = this.$route.params.iid;
    this.getGoodDetail();
    this.getRecommend();
  },
  computed: {},
  methods: {
    /**
     * 网络相关的请求方法
     */
    getGoodDetail() {
      getGoodDetail(this.goodiid).then((res) => {
        console.log(res);
        this.swiperImg = res.data.result.itemInfo.topImages;
        this.goods = new Goods(
          res.data.result.itemInfo,
          res.data.result.columns,
          res.data.result.shopInfo.services
        );
        this.shop = new Shop(res.data.result.shopInfo);
        this.detailInfo = res.data.result.detailInfo;
        this.paramInfo = new GoodsParam(
          res.data.result.itemParams.info,
          res.data.result.itemParams.rule
        );
        if (res.data.result.rate !== 0) {
          this.commendInfo = res.data.result.rate.list[0];
        }
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        this.recommend = res.data.data.list;
        console.log(this.recommend);
      });
    },
    imgFrash() {
      this.$refs.scroll.scroll.refresh();
    },
    NowItem(index) {
      console.log(index);
      console.log(this.$refs.paraminfo.$el.offsetTop);
      switch (index) {
        case 0:
          this.$refs.scroll.GoToTop(0, 0, 300);
          break;
        case 1:
          this.$refs.scroll.GoToTop(
            0,
            -this.$refs.paraminfo.$el.offsetTop,
            300
          );
          break;
        case 2:
          this.$refs.scroll.GoToTop(
            0,
            -this.$refs.commendinfo.$el.offsetTop,
            300
          );
          break;
        case 3:
          this.$refs.scroll.GoToTop(
            0,
            -this.$refs.goodlistinfo.$el.offsetTop,
            300
          );
          break;
        //这边也是可以使用用数组的 还有那个下一帧的方法 使用节流函数就是在图片加载完成之后emit一次事件就是
        //可以实现 这个是效率最高的 因为考虑的到还要监听滚动
      }
    },
    //监听滚动是否展示这个backtop标签
    ShowAndDie(postion) {
      //这边就是监听滚动事件 位置和上部导航条联动起来 我就不做了 如果前面使用了数组就是可以使用联动的方式
      //这边有个细节 就是js中可以是使用功能Math中有个常亮可以展示数据
      console.log(postion);
      //这个就是监听文件top的显示和不显示
      if (postion.y < -1000) {
        this.controlTopIsShow = true;
      } else {
        this.controlTopIsShow = false;
      }
    },
    
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}
.swiperbox {
  height: 400px;
}
.scroll {
  height: calc(100% - 44px - 20px);
  overflow: hidden;
}
</style>