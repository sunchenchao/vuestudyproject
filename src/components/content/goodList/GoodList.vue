<template>
    <div class="goodlist">
        <good-list-item class="goodlistitem" v-for="(item,index) in goodList" :gooditem="item"  :key="index">

        </good-list-item>
    </div>
    
</template>

<script>
    import GoodListItem from "@/components/content/goodList/GoodListItem";
    export default {
        name: "GoodList",
        props:{
            goodList:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        components:{
            GoodListItem
        },
        computed:{

        }
    }
</script>

<style scoped>
    .goodlist{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-left: 5px;

    }
    .goodlistitem{
        width: 50%;
        padding: 0px;

    }


</style>