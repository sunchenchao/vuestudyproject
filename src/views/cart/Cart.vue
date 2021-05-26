<template>
    <div class="wrapper">
        <h1>防抖函数的使用</h1>
        <input v-model="fangdou">

    </div>


</template>

<script>
    export default {
        name: "Cart",
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
        }
    }
</script>

<style scoped>
    .wrapper{
        width: 100%;
        height: 500px;
    }

</style>