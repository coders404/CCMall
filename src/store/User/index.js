import { reqCode, reqRegister, reqLogin, reqUserInfo, reqLogout, reqOrderTradeList, reqTrade, reqSubmitOrder, reqOrderPayInfo } from '../../API'
const state = {
    phoneCode: '',
    token: localStorage.getItem('token'),
    userInfo: {},
    addressList: [],
    tradeGoodsInfo: {},
}
const mutations = {
    GETCODE(state, code) {
        state.phoneCode = code
    },
    GOLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    LOGOUT(state) {
        state.token = '',
            state.userInfo = {},
            localStorage.removeItem('token')
    },
    GETORDERTRADEINFO(state, addressList) {
        state.addressList = addressList
    },
    GETTRADE(state, data) {
        state.tradeGoodsInfo = data
    },
    SAVEORDERID(state, orderId) {
        state.orderId = orderId
    },


}
const actions = {
    async getCode({ commit }, phone) {
        try {
            let result = await reqCode(phone)
            commit('GETCODE', result.data)
            return 'ok'
        } catch (error) {
            return Promise.reject(new Error(fail))
        }
    },
    async register({ commit }, data) {
        try {
            let result = await reqRegister(data)
            console.log(result);
            return 'ok'

        } catch (error) {
            return Promise.reject(new Error('fail'))
        }
    },
    async goLogin({ commit }, data) {
        try {
            const result = await reqLogin(data)
            commit('GOLOGIN', result.data.token)
            localStorage.setItem('token', result.data.token)
            return 'ok'
        } catch (error) {
            return Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code == 200) {
            console.log(result, '0000')
            commit('GETUSERINFO', result.data)
        } else {
            return Promise.reject(new Error('fail'))
        }


    },
    async logout({ commit }) {
        try {
            const result = await reqLogout()
            commit('LOGOUT')
            return 'ok'
        } catch (error) {
            return Promise.reject(new Error('fail'))
        }
    },
    async getOrderTradeInfo({ commit }) {
        try {
            const result = await reqOrderTradeList()
            console.log(result, 111)
            commit('GETORDERTRADEINFO', result.data)
        } catch (error) {
            return Promise.reject(new Error('fail'))
        }
    },
    async getTrade({ commit }) {
        try {
            const result = await reqTrade()
            console.log(result, 222)
            commit('GETTRADE', result.data)
        } catch (error) {

        }
    },



}
const getters = {
    totalNum(state) {
        return state.tradeGoodsInfo.detailArrayList.reduce((total, item) => {
            return total += item.skuNum
        }, 0)
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}