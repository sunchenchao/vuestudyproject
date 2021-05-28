<template>
  <div id="detail">
    <nav-bar></nav-bar>
    <scroll class="scroll" ref="scroll" @imageDetail="imgFrash">
      <detial-swiper  :swiperImg="swiperImg"></detial-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>

      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      
      <detail-commend-info :commendInfo="commendInfo"></detail-commend-info>
        <good-list :goodList="recommend"></good-list>
    </scroll>
  </div>
</template>
<script>
import NavBar from "@/views/detail/childComps/NavBar.vue";

import { getGoodDetail, Goods, Shop, GoodsParam,getRecommend } from "@/network/detail.js";
import DetialSwiper from "@/views/detail/childComps/DetialSwiper.vue";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo.vue";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo.vue";
import DetailCommendInfo from "@/views/detail/childComps/DetailCommendInfo.vue";
import GoodList from "@/components/content/goodList/GoodList";

export default {
  name: "Detail",
  components: {
    NavBar,
    DetialSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommendInfo,
      GoodList
  },
  data() {
    return {
      goodiid: null,
      swiperImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commendInfo:{},
      recommend:[],
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
    getRecommend(){
      getRecommend().then((res)=>{
         this.recommend = res.data.data.list;
        console.log(this.recommend);
      })
    },
    imgFrash() {
      this.$refs.scroll.scroll.refresh();
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
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>