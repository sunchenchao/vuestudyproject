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
    
    {{goodiid}}

</div>
    
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
    name:"Detail",
    components:{
        NavBar

    },
    data(){
        return{
            goodiid:null,
            title:["商品","参数","评论","推荐"],
            currentIndex:0
        }
    },
    created(){
        console.log(this.$route.params)
        this.goodiid = this.$route.params.iid;
    },
    computed:{

    },
    methods:{
        NowItem(index){
         
            this.currentIndex = index;

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

</style>