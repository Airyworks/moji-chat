import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

import SignIn from '@/components/sign/SignIn.vue'
import SignUp from '@/components/sign/SignUp.vue'
import Channel from '@/components/main/Channel.vue'
import ChannelList from '@/components/main/ChannelList.vue'


Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: ChannelList
  },
  {
    path: 'signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: 'signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: 'channel',
    name: 'Channel',
    component: Channel
  },
  {
    path: 'channellist',
    name: 'ChannelList',
    component: ChannelList
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
