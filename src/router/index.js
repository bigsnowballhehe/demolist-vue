import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/router_props/:sid',
    name: 'router_props',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "routerProp" */ '@/components/routerProps/router_props.vue'
      )
  },
  {
    path: '/fun_prop',
    name: 'fun_props',
    props: route => ({ sid: route.query.sid - 1 }),
    component: () =>
      import(
        /* webpackChunkName: "routerProp" */ '@/components/routerProps/fun_props.vue'
      )
  },
  {
    path: '/ckeditor',
    component: () => import('@/components/ckEditor/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
