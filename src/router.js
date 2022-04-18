import Vue from 'vue'
import store from './store'
import Router from 'vue-router'
// import Home from './views/Home'
// import Search from './views/Search'
// import Detail from './views/Detail'
// import AddCartSuccess from './views/Cart/AddCartSuccess'
// import ShopCart from './views/Cart/ShopCart'
// import Register from './views/User/Register'
// import Login from './views/User/Login'
// import GetOrderTradeInfo from './views/Order/GetOrderTradeInfo'
// import SubmitOrder from './views/Order/SubmitOrder'
// import PaySuccess from './views/Pay'
// import MyOrderList from './views/Order/MyOrderList'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('./views/Home'),
      meta: {
        Show: true
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('./views/Detail'),
      beforeEnter: (to, from, next) => {
        if (from.path == '/search' || '/addcartsuccess') {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      path: '/myorderlist',
      name: 'MyOrderList',
      component: () => import('./views/Order/MyOrderList'),
      children: [
        {
          path: 'myorder',
          name: 'MyOrder',
          component: () => import('./views/Order/MyOrderList/MyOrder')
        },
        {
          path: 'grouporder',
          name: 'GroupOrder',
          component: () => import('./views/Order/MyOrderList/GroupOrder')
        },
        {
          // 进入到center重定向到我的订单，要不然一片空白
          //注意：要写到myorderlist里面来
          path: '/myorderlist',
          redirect: '/myorderlist/myorder'
        },
      ]
    },
    {
      path: '/paysuccess',
      name: 'PaySuccess',
      component: () => import('./views/Pay'),
      beforeEnter: (to, from, next) => {
        if (from.path == '/submitorder') {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      path: '/submitorder',
      name: 'SubmitOrder',
      component: () => import('./views/Order/SubmitOrder'),
      beforeEnter: (to, from, next) => {
        if (from.path == '/trade') {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      path: '/trade',
      name: 'GetOrderTradeInfo',
      component: () => import('./views/Order/GetOrderTradeInfo'),
      beforeEnter: (to, from, next) => {
        if (from.path == '/shopcart') {
          next()
        } else {
          next(false)

        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/User/Login'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('./views/User/Register'),
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: () => import('./views/Cart/ShopCart'),
    },
    {
      path: '/addcartsuccess',
      name: 'AddCartSuccess',
      component: () => import('./views/Cart/AddCartSuccess'),
      beforeEnter: (to, from, next) => {
        if (from.path == '/detail') {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      path: '/search/:keyword?',
      name: 'Search',
      component: () => import('./views/Search')

    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  let token = store.state.User.token
  let username = store.state.User.userInfo.loginName
  console.log(store.state.User.userInfo, 111)
  if (token) {
    if (to.path == '/login') {
      next('/')
    } else {
      if (username) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          store.dispatch('logout')
          next('/login')
        }
      }
    }
  } else {
    next()
    if (to.path == '/shopcart' || to.path.indexOf('order') != -1 || to.path == '/paysuccess' || to.path == '/trade') {
      console.log(to)
      next('/login')
    }
  }

})
export default router
