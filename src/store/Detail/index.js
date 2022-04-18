import { reqGoodsDetail } from '../../API/index'
const state = {
    goodsDetail: {}
}
const mutations = {
    GETGOODSDETAIL(state, goodsDetail) {
        state.goodsDetail = goodsDetail
    }
}
const actions = {
    async getGoodsDetail({ commit }, skuId) {
        try {
            let result = await reqGoodsDetail(skuId);
            commit('GETGOODSDETAIL', result.data)
        } catch (error) {
            console.log(error.message)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}