<template>
    <div class="tabcontrol">
        <div  v-for="(item,index) in titles" class="tabcontrol-item" @click="CheckTab(index)">
            <span :class="{active:currentIndex===index}">
                {{item}}
            </span>
        </div>

    </div>
    
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        data(){
            return {
                currentIndex:0,
            }
        },
        methods:{
            CheckTab(index){
                this.currentIndex = index;
                this.$emit("tabCheck",index);

            }
        }

    }
</script>

<style scoped>
    .tabcontrol{
        height: 30px;
        text-align: center;
        display: flex;
        background-color: white;
    }
    .tabcontrol-item{
        flex: 1;
    }
    .active{
        color: pink;
        border-bottom: 3px solid pink;
    }

</style>