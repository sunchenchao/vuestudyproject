<template>
    <div class="recommend">
        <div class="recommend-item"  v-for="item in recommends" >
            <img :src="item.image">
            <div>{{item.title}}</div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return[];
                }
            }

        }
    }
</script>

<style scoped>
    .recommend{
        margin-top: 10px;
        text-align: center;
        display: flex;
        margin-bottom: 10px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 60px;
    }



</style>