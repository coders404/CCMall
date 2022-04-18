import Vue from 'vue';
import Vuex from 'vuex';
import Home from './Home';
import Search from './Search'
import Detail from './Detail'
import Cart from './Cart'
import User from './User'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        Home,
        Search,
        Detail,
        Cart,
        User,
    }
})