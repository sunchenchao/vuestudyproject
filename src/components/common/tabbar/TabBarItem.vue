<template>
    <div class="tab-bar-item" @click="itemClick" >
        <div v-if="isActive">
            <slot  name="item-icon"></slot>
        </div>
        <div v-else>
            <slot  name="item-icon-active"></slot>
        </div>
        <div :style="isActiveColor">
            <slot name="item-text"></slot>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor: {
                type:String,
                default:"",
            }
        },
        data(){
            return{
                // isActive:true,
            }
        },
        methods:{
            itemClick(){
                if (this.$route.path  == this.path){
                    return;
                }
                this.$router.replace(this.path);

            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1;
            },
            isActiveColor(){
                return this.isActive ? {color:this.activeColor} : {color: "red"};
            }
        }

    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
    }
    .active{
        color: pink;
    }
</style>