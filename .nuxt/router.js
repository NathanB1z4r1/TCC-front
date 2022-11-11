import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3668c97d = () => interopDefault(import('..\\pages\\Adicionar_colaborador\\index.vue' /* webpackChunkName: "pages/Adicionar_colaborador/index" */))
const _4034b752 = () => interopDefault(import('..\\pages\\Cadastrar_colaborador\\index.vue' /* webpackChunkName: "pages/Cadastrar_colaborador/index" */))
const _36d57737 = () => interopDefault(import('..\\pages\\Cadastro\\index.vue' /* webpackChunkName: "pages/Cadastro/index" */))
const _35237a5a = () => interopDefault(import('..\\pages\\Cadastro_Treinamento\\index.vue' /* webpackChunkName: "pages/Cadastro_Treinamento/index" */))
const _db8670d6 = () => interopDefault(import('..\\pages\\Esqueci_senha\\index.vue' /* webpackChunkName: "pages/Esqueci_senha/index" */))
const _68a565f1 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _5fd5974c = () => interopDefault(import('..\\pages\\Localizar_Colaborador\\index.vue' /* webpackChunkName: "pages/Localizar_Colaborador/index" */))
const _494262f3 = () => interopDefault(import('..\\pages\\Realizar_Treinamento\\index.vue' /* webpackChunkName: "pages/Realizar_Treinamento/index" */))
const _70a9ab7e = () => interopDefault(import('..\\pages\\Registrar_Colaboradores\\index.vue' /* webpackChunkName: "pages/Registrar_Colaboradores/index" */))
const _339c537b = () => interopDefault(import('..\\pages\\Registro_Participantes\\index.vue' /* webpackChunkName: "pages/Registro_Participantes/index" */))
const _7d51d910 = () => interopDefault(import('..\\pages\\Sortear_DDS\\index.vue' /* webpackChunkName: "pages/Sortear_DDS/index" */))
const _775723c6 = () => interopDefault(import('..\\pages\\Treinamentos_realizados\\index.vue' /* webpackChunkName: "pages/Treinamentos_realizados/index" */))
const _476add20 = () => interopDefault(import('..\\pages\\Treinamentos_realizadosPT2\\index.vue' /* webpackChunkName: "pages/Treinamentos_realizadosPT2/index" */))
const _164c57a0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Adicionar_colaborador",
    component: _3668c97d,
    name: "Adicionar_colaborador"
  }, {
    path: "/Cadastrar_colaborador",
    component: _4034b752,
    name: "Cadastrar_colaborador"
  }, {
    path: "/Cadastro",
    component: _36d57737,
    name: "Cadastro"
  }, {
    path: "/Cadastro_Treinamento",
    component: _35237a5a,
    name: "Cadastro_Treinamento"
  }, {
    path: "/Esqueci_senha",
    component: _db8670d6,
    name: "Esqueci_senha"
  }, {
    path: "/home",
    component: _68a565f1,
    name: "home"
  }, {
    path: "/Localizar_Colaborador",
    component: _5fd5974c,
    name: "Localizar_Colaborador"
  }, {
    path: "/Realizar_Treinamento",
    component: _494262f3,
    name: "Realizar_Treinamento"
  }, {
    path: "/Registrar_Colaboradores",
    component: _70a9ab7e,
    name: "Registrar_Colaboradores"
  }, {
    path: "/Registro_Participantes",
    component: _339c537b,
    name: "Registro_Participantes"
  }, {
    path: "/Sortear_DDS",
    component: _7d51d910,
    name: "Sortear_DDS"
  }, {
    path: "/Treinamentos_realizados",
    component: _775723c6,
    name: "Treinamentos_realizados"
  }, {
    path: "/Treinamentos_realizadosPT2",
    component: _476add20,
    name: "Treinamentos_realizadosPT2"
  }, {
    path: "/",
    component: _164c57a0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
