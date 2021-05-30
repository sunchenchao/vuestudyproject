export default {
    cartLength(state,getters){
        //其实这边是需要优化的 因为数量不是这么来算的 如果要计算的
        //就是要计算每一个数量的总和
        //先不修改 到时候再继续修改
        return state.cartList.length;
    },
    cartList (state){
        return state.cartList;
}

}