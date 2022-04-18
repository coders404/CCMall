import { reqSubnavLsit } from '../../API'
const state = {
    subnavList: [],
};
const mutations = {
    GETSUBNAVLIST(state, subnavList) {
        state.subnavList = subnavList;
    },
};
const actions = {
    async getSubnavList({ commit }) {
        const result = await reqSubnavLsit();

        if (result.code == 200) {
            commit('GETSUBNAVLIST', result.data)
        }
    },

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