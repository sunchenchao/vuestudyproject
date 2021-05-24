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
        props:{
            numtype:{
                type:Number,
                default:0,
            }
        },
        mounted() {

           this.scroll = new Bscroll(this.$refs.wrapper,{
                probeType:this.numtype,
                pullUpLoad:true,
               observeDOM:true,
               click:true
            });
            //监听滚动时间
           this.scroll.on("scroll",(postion)=>{
                   this.$emit("ShowAndDie",postion);
            });
            this.scroll.on("pullingUp",()=>{
                this.$emit("UpMore");
                console.log("上拉加载更多");
            })
        },
        methods:{
            GoToTop(x,y,time=300){
                this.scroll.scrollTo(x,y,time);
            },
            Finish(){
                this.scroll.finishPullUp();
            }
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