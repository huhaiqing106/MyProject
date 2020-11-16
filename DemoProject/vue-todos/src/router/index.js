import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lifeCycle from '@/components/lifeCycle'
import lifeCycleDemo from '@/components/lifeCycleDemo'
import keepAliveDemo from '@/components/keepAliveDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: "/lifeCycle",
      name: "lifeCycle",
      component: lifeCycle
    }, {
      path: "/lifeCycleDemo",
      name: "lifeCycleDemo",
      component: lifeCycleDemo
    }, {
      path: "/keepAliveDemo",
      name: "keepAliveDemo",
      component: keepAliveDemo
    }
  ]
})
