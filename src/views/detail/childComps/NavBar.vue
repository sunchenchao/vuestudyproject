<template>
        <nav-barr>
           <div @click="back()" slot="left">
            <img class="left-img" src="@/assets/img/common/back.svg">
        </div>
         <div class="center" slot="center">
             <div :class="{active:index == currentIndex}" @click="NowItem(index)" class="nav-item" v-for="(item,index) in title" :key="index">{{item}}</div>
         </div>
         <div slot="right"></div>
   
        </nav-barr>
        
    
</template>
<script>
import NavBarr from "@/components/common/navbar/NavBar";
export default {
    name:"NavBar",
    components:{
        NavBarr,
    },
    data(){
        return{
            title:["商品","参数","评论","推荐"],
            currentIndex:0,
        }
    },
    methods:{
        //这个就是监听的那个item的点击函数
         NowItem(index){
            this.currentIndex = index;
            this.$emit("NowItem",index);
        },
        back(){
            this.$router.back();
        },

        
    }
    
}
</script>
<style  scoped>

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

</style>