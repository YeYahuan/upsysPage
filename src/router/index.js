import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Main from '@/components/main/Main'
import Mine from '@/components/myUP/Myup'
import MyLabel from '@/components/myUP/MyLabel'
import Mylike from '@/components/myUP/Mylikes'
import MyFollow from '@/components/myUP/MyFollows'
import FollowMe from '@/components/myUP/FollowMe'
import LikeMe from '@/components/myUP/LikeMe'
import Barrage from '@/components/myUP/Barrage'
import Find from '@/components/find/Find'
import Person from '@/components/find/Person'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/Index',
            component: Index
        },
        {
            path: '/Index',
            name: Index,
            component: Index
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
        },
        {
            path: '/FollowMe',
            name: FollowMe,
            component: FollowMe
        },
        {
            path: '/LikeMe',
            name: LikeMe,
            component: LikeMe
        },
        {
            path: '/Barrage',
            name: Barrage,
            component: Barrage
        }
    ]
})