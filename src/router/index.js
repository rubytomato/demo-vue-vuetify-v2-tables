import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/iterator',
    name: 'IteratorSimple',
    component: () => import(/* webpackChunkName: "IteratorSimple" */ '../views/IteratorSimple.vue')
  },
  {
    path: '/iterator-loading',
    name: 'IteratorSimpleLoading',
    component: () => import(/* webpackChunkName: "IteratorSimpleLoading" */ '../views/IteratorSimpleLoading.vue')
  },
  {
    path: '/iterator-options',
    name: 'IteratorSimpleOptions',
    component: () => import(/* webpackChunkName: "IteratorSimpleOptions" */ '../views/IteratorSimpleOptions.vue')
  },
  {
    path: '/iterator-sort',
    name: 'IteratorSort',
    component: () => import(/* webpackChunkName: "IteratorSort" */ '../views/IteratorSort.vue')
  },
  {
    path: '/iterator-sort-custom',
    name: 'IteratorSortCustom',
    component: () => import(/* webpackChunkName: "IteratorSortCustom" */ '../views/IteratorSortCustom.vue')
  },
  {
    path: '/iterator-sort-gamewatch',
    name: 'IteratorSortGamewatch',
    component: () => import(/* webpackChunkName: "IteratorSortGamewatch" */ '../views/IteratorSortGamewatch.vue')
  },
  {
    path: '/iterator-search',
    name: 'IteratorSearch',
    component: () => import(/* webpackChunkName: "IteratorSearch" */ '../views/IteratorSearch.vue')
  },
  {
    path: '/iterator-search-custom',
    name: 'IteratorSearchCustom',
    component: () => import(/* webpackChunkName: "IteratorSearchCustom" */ '../views/IteratorSearchCustom.vue')
  },
  {
    path: '/iterator-group',
    name: 'IteratorGroup',
    component: () => import(/* webpackChunkName: "IteratorGroup" */ '../views/IteratorGroup.vue')
  },
  {
    path: '/iterator-group-custom',
    name: 'IteratorGroupCustom',
    component: () => import(/* webpackChunkName: "IteratorGroupCustom" */ '../views/IteratorGroupCustom.vue')
  },
  {
    path: '/data-table-simple',
    name: 'DataTableSimple',
    component: () => import(/* webpackChunkName: "DataTableSimple" */ '../views/DataTableSimple.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
