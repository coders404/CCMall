import { reqAddOrUpdateCart, reqCartList, changeGoodsStatue, reqDeleteGoods } from '../../API'
import UUID from '../../Utils/uuid'
const state = {
    userTempId: UUID(),
    shopcartList: []
}
const mutations = {
    GETSHOPCARTLIST(state, shopcartList) {
        state.shopcartList = shopcartList
    }
}
const actions = {
    async addCart({ commit }, { skuID, skuNum }) {
        let result = await reqAddOrUpdateCart(skuID, skuNum)
        if (result.code == 200) {
            console.log(result, 'cara')
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async getShopCartList({ commit }) {
        try {
            let result = await reqCartList()
            commit('GETSHOPCARTLIST', result.data[0].cartInfoList)
        } catch (error) {
            console.log(error.message);
        }
    },
    async changeGoodsChecked({ commit }, { skuID, isChecked }) {
        try {
            const result = await changeGoodsStatue(skuID, isChecked)
            return 'ok'
        } catch (error) {
            return Promise.reject(new Error('fail'))
        }
    },
    checkAllGoodsStatus({ dispatch, state }, isChecked) {
        let pArr = []
        state.shopcartList.forEach(element => {
            let p = dispatch('changeGoodsChecked', { skuID: element.skuId, isChecked })
            // changeGoodsStatue(element.skuId, isChecked)
            pArr.push(p)
        });
        return Promise.all(pArr)
    },
    async deleteGoods({ commit }, skuId) {
        try {
            let result = await reqDeleteGoods(skuId)
            return 'ok'
        } catch (error) {
            return Promise.reject(new Error(fail))
        }

    },
    deleteCheckedGoods({ dispatch, getters }) {
        let pArr = [];
        getters.chooseGoodsList.forEach(element => {
            let p = dispatch('deleteGoods', element.skuId)
            pArr.push(p)
        });
        return Promise.all(pArr)
    }
}
const getters = {
    chooseGoodsList(state) {
        return state.shopcartList.filter(item => item.isChecked)
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
}