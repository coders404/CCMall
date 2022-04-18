import requests from './request'
export const reqSubnavLsit = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'GET' })
}
export const reqSearchList = (data) => {
    return requests({ url: '/list', method: 'POST', data })
}
export const reqGoodsDetail = (skuId) => {
    return requests({ url: `/item/${skuId}`, method: 'GET' })
}
export const reqAddOrUpdateCart = (skuId, skuNum) => {
    return requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'POST' })
}
export const reqCartList = () => {
    return requests({ url: '/cart/cartList', method: 'GET' })
}
export const changeGoodsStatue = (skuID, isChecked) => {
    return requests({ url: `/cart/checkCart/${skuID}/${isChecked}`, method: 'GET' })
}
export const reqDeleteGoods = (skuId) => {
    return requests({ url: `/cart/deleteCart/${skuId}`, method: 'DELETE' })
}
export const reqRegister = (data) => {
    return requests({ url: '/user/passport/register', method: 'POST', data })
}
export const reqCode = (phone) => {
    return requests({ url: `/user/passport/sendCode/${phone}`, method: 'GET' })
}
export const reqLogin = (data) => {
    return requests({ url: `/user/passport/login`, method: 'POST', data })
}
export const reqUserInfo = () => {
    return requests({ url: `/user/passport/auth/getUserInfo`, method: 'GET' })
}
export const reqLogout = () => {
    return requests({ url: '/user/passport/logout', method: 'GET' })
}
export const reqOrderTradeList = () => {
    return requests({ url: `/user/userAddress/auth/findUserAddressList`, method: 'GET' })
}
export const reqTrade = () => {
    return requests({ url: `/order/auth/trade`, method: 'GET' })
}
export const reqSubmitOrder = (tradeNo, data) => {
    return requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'POST', data })
}
export const reqOrderPayInfo = (orderId) => {
    return requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'GET' })
}
export const reqPayResult = (orderId) => {
    return requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'GET' })
}
export const reqMyOrderList = (page, limit) => {
    return requests({ url: `/order/auth/${page}/${limit}`, method: 'GET' })
}