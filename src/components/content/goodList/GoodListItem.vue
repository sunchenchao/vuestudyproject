<template>
    <div class="gooditem">
        <img :src="gooditem.show.img">
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