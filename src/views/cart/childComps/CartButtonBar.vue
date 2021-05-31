<template>
    <div class="cart-button-bar">
        <div class="select">
            <check-button :isChecked="isSelectAll" class="check-button" @click.native="checkAll()" />
            <span>全选</span>
        </div>
        <div class="sum">
            <span>合计：</span>
            <span></span>
        </div>
        <div class="calculate" >去计算({{totalLength}})</div>

    </div>
</template>

<script>
    import CheckButton from '@/components/content/checkButton/CheckButton.vue'
    import { mapGetters } from 'vuex';

    export default {
        components: {
            CheckButton
        },
        computed:{
            ...mapGetters(['cartList']),
            totalLength(){
                return this.cartList.filter(item => item.checked).length
            },
            isSelectAll(){
                if(this.cartList.length === 0){
                    return false;
                }
                //使用高阶函数寻找
                return !this.cartList.find(item=>{
                  return !item.checked;
                })
            }

        },
        methods:{
            checkAll(){
                console.log("xuanzhog");
                if(this.isSelectAll){
                    //如果全部都选中
                    this.cartList.forEach(item => item.checked= false)

                }else{
                    //如果全都没有选中
                    this.cartList.forEach(item => item.checked= true)


                }
            }


        }
    }
</script>

<style scoped>
    .cart-button-bar{
        width: 100%;
        display: flex;
        height: 40px;
        align-items: center;
        background-color: white;
    }
    .select{
        display: flex;
        flex: 1;
        padding-left: 5px;
    }
    .check-button{
        margin-right: 5px;
    }
    .sum{
        flex:2;
    }
    .calculate{
        flex: 1;
        height: 100%;
        line-height: 40px;
        text-align: center;
        background-color: red;
        color: #fff;
    }
</style>