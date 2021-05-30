const actions = {
    addShopCar(context,payload){
        //this.state.cartList.push(product);
        //这边先找到good物品的元素 这个就是和原来数组里面的内容是进行关联的
        //然后直接修改这个就是数组里面的内容也是会发生该改变
        //就是使用以下这个方法

        let good = context.state.cartList.find((item)=>{
            console.log(item.iid === payload.iid);
            return item.iid === payload.iid;
        })
        // // //这边就是对存在和不存在的判断
        // // //这边就是需要使用context去使用
        if (good){
            context.commit("addGoods",good);
        } else{
            payload.count=1;
            context.commit("newGoods",payload);
        }

    }

}

export default actions;