<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot>

            </slot>

        </div>

    </div>
    
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "Scroll",
        data(){
            return{
                scroll:null
            }
        },
        mounted() {
           this.scroll = new Bscroll(this.$refs.wrapper,{
                probeType:3,
                pullUpLoad:true,
               observeDOM:true
            });
            //监听滚动时间
           this.scroll.on("scroll",(postion)=>{
                console.log(postion);
            });
            this.scroll.on("pullingUp",()=>{
                console.log("上拉加载更多");
            })
        }
    }
</script>

<style scoped>
    .wrapper{
        overflow: hidden;
    }
    .content{
    }

</style>