import { reqSearchList } from '../../API'
const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    async getSearchList({ commit }, data) {
        try {
            let result = await reqSearchList(data)
            commit('GETSEARCHLIST', result.data)
        } catch (error) {
            alert(error.message)
        }
    }
};
const getters = {

}

export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters
}