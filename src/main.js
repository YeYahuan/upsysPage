// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
        state: {
            title: '画像系统平台'
        },
        mutations: {
            changeTitle(state, titleName) {
                state.title = titleName;
            }
        }
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: store,
    components: { App },
    template: '<App/>'
})