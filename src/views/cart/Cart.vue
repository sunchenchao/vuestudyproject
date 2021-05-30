<template>
    <div id="cart">
        <nav-bar>
            <div slot="center">
                购物车({{cartLength}})
            </div>
        </nav-bar>
        <scroll class="content">
            <cart-list>
                <cart-list-item v-for="(item,index) in cartList" :good="item" :key="item.iid">
                </cart-list-item>
            </cart-list>
        </scroll>



    </div>


</template>

<script>
    import Scroll from "@/components/common/scroll/Scroll.vue";
    import NavBar from "@/components/common/navbar/NavBar.vue";
    import CartListItem from "@/views/cart/childComps/CartListItem.vue";

    //这个就是可以将getter方法结构然后导出
    import {mapGetters}  from "vuex"
    import CartList from "./childComps/CartList";
    export default {
        name: "Cart",
        components: {
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
        }
    }
</script>

<style scoped>
#cart{
    height: 100vh;
}
.content{
    margin-top: 49px;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
}

</style>