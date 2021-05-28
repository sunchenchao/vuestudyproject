<template>
    <div class="gooditem" @click="detail">
        <img :src="getImgUrl">
        <div class="title">
           {{gooditem.title}}
        </div>
        <div class="sendwrap"><span class="price">{{gooditem.price}}</span><img class="like" src="@/assets/img/common/collect.svg"></div>

    </div>
    
</template>

<script>
    export default {
        name: "GoodListItem",
        props:{
            gooditem:{
                type:Object,
                default(){
                    return {};
                }
            }
        },
        methods:{
            detail(){
                this.$router.push("/detail/"+this.gooditem.iid)
            }
        },
        computed:{
            getImgUrl(){
                //这里换个位置就是会发生错误：前端有可能又数据 但是又是 不应该
                //prop传过来的数据就是被替换了 为什么会发生这种事情
                return this.gooditem.image || this.gooditem.show.img;
            }
        }
    }
</script>

<style scoped>
    .gooditem>img{
        width: 96%;
        padding: 2px;
    }
    .title{
        height:18px;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .price{
        color: deeppink;
    }
    .sendwrap{
        text-align: center;
    }
    .like{
        width: 20px;
    }

</style>