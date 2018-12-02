import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main'
import Mine from '@/components/myUP/Myup'
import MyLabel from '@/components/myUP/MyLabel'
import Mylike from '@/components/myUP/Mylikes'
import MyFollow from '@/components/myUP/MyFollows'
import Find from '@/components/find/Find'
import Person from '@/components/find/Person'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/Main',
            component: Main
        },
        {
            path: '/Main',
            name: 'Main',
            component: Main
        },
        {
            path: '/Find',
            name: 'Find',
            component: Find
        },
        {
            path: '/Mine',
            name: 'Mine',
            component: Mine
        },
        {
            path: '/Person',
            name: 'Person',
            component: Person
        },
        {
            path: '/MyLabel',
            name: 'MyLabel',
            component: MyLabel
        },
        {
            path: '/Mylike',
            name: 'Mylike',
            component: Mylike
        },
        {
            path: '/MyFollow',
            name: 'MyFollow',
            component: MyFollow
        }
    ]
})