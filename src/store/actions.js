export default {
  addCart(context, payload) {
    // payload新添加的商品
    // 方法一
    // let oldProduct = null;
    // for(let item of state.cartList) {
    //   if(item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    // if(oldProduct) {
    //   oldProduct.count += 1
    // }else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }

    // 方法二
    // let index = state.cartList.indexOf(payload)
    // if(index === -1) {
    //   let oldProduct = state.cartList(index)
    //   oldProduct.count += 1
    // }else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }

    // 方法三
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if(oldProduct) {
      oldProduct.count += 1
      context.commit('addCounter', oldProduct)
    }else {
      payload.count = 1
      // context.state.cartList.push(payload)
      context.commit('addToCart', payload)
    }
  }
}