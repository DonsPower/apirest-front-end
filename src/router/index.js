import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import login from '../views/Login.vue'
import administrador from '../views/Administrador/Index.vue'

Vue.use(VueRouter)
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/administrador/index',
    name: 'administrador',
    component: administrador,
    meta: {rutaProtegida: true}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {rutaProtegida: true}
  },
  {
    path: '/login',
    name: 'login',
    component: login,
   
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//vuerouter-> Verifica si hay un token vlaido para dar continuacion a la page
router.beforeEach((to,from,next) => {
  //si existe = true si no existe= false
  //TODO: MODIFICAR TIEMPO DE VIDA DEL TOKEN
  //TODO: falta que me redireccione cuando se loguea
  const rutaEsProtegida = to.matched.some(item => item.meta.rutaProtegida)
  console.log(store.state.token);
  if(rutaEsProtegida && store.state.token === null){
    next('/')
    //console.log("Es protegida")
  }else{
    next() 
    //console.log("No es protegida")
  }
})


export default router
