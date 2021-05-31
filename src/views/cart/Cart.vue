<template>
    <div id="cart">
        <nav-bar>
            <div slot="center">
                购物车({{cartLength}})
            </div>
        </nav-bar>
        <scroll ref="scroll" class="content">
            <cart-list>
                <cart-list-item v-for="(item,index) in cartList" :listItem="item" :key="item.iid">
                </cart-list-item>
            </cart-list>
        </scroll>
        <cart-button-bar class="bottom-bar">

        </cart-button-bar>



    </div>


</template>

<script>
    import Scroll from "@/components/common/scroll/Scroll.vue";
    import NavBar from "@/components/common/navbar/NavBar.vue";
    import CartListItem from "@/views/cart/childComps/CartListItem.vue";

    //这个就是可以将getter方法结构然后导出
    import {mapGetters}  from "vuex"
    import CartList from "./childComps/CartList";
    import CartButtonBar from  "@/views/cart/childComps/CartButtonBar.vue"
    export default {
        name: "Cart",
        components: {
            CartButtonBar,
            CartList,
            CartListItem,
            NavBar,
            Scroll,
        },
        data(){
            return{
                fangdou:"come",
                timer:null,

            }
        },
        methods:{
            ChangeRequest(){
                //第一次执行 就是先看一下整个timer是不是反正就是清除上一个计时器 然后再次调用一个新的计时器
                console.log("ss");
                if (timer){
                    clearTimeout(timer)
                }
                timer = setTimeout(()=>{
                    console.log("我执行了");
                },1000);
            },
            come(){
                console.log("22");
            }

        },
        watch:{
            //整个就算是防抖函数吧
            fangdou(){
                console.log("ss");
                if (this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    console.log("我执行了");
                },1000);

            }
        },
        computed:{
            ...mapGetters(["cartLength","cartList"]),
        },
        activated() {
            this.$refs.scroll.scroll.refresh()
        }
    }
</script>

<style scoped>
#cart{
    height: 100vh;
}
.content{
    margin-top: 49px;
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
}
    .bottom-bar{
        position: fixed;
        bottom: 49px;

    }

</style>