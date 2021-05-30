const mutations = {
    //为了调试的需要 一个是新增商品 一个是增加商品  所以要把这个操作放到
    //action 中
    //新增商品
    addGoods(state,good){
        good.count++;
    },
    //创建新的产品
    //mutations 也是存在两个参数的 到时候需要回去把vuex看一遍
    newGoods(state,payload){
        this.state.cartList.push(payload);
    }
}
export default mutations;