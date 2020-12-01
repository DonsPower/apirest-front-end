import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state,payload){
      state.token=payload
    }
  },
  actions: {
    //commit sirven para llamar a las mutaciones
    async login({commit}, usuario){
      console.log(usuario)
      try {
        const res= await fetch('https://donasapiback.herokuapp.com/auth/login',{
          method: 'POST',
          //Enviamos una aplicacion en json
          headers:{
            'Content-Type' : 'application/json',
          },
          //=psotman
          body: JSON.stringify(usuario)
        })
        //respuesta del backen
        const resBD = await res.json();
        console.log(resBD)
        commit('setToken', resBD.token);
        localStorage.setItem('token', resBD.token)
      } catch (error) {
        console.log(error)
      }
    },
    //Obtener el token por si recarga la pagina
    //Vemos hay un token o no en el localstorage
    leerToken({commit}){
       if(localStorage.getItem('token')){
         commit('setToken', localStorage.getItem('token'))
       }else{
        commit('setToken', null)
       }
    },
    cerrarsesion({commit}){
      localStorage.removeItem('token')
      commit('setToken', null)
      
    },
    async addUser({commit}, usuario){
      //Obtengo un objeto en forma de usuario.
      
      try {
        const res= localStorage.getItem('token');
        const rest= await fetch('https://donasapiback.herokuapp.com/users',{
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json',
            'auth' : res,
            
          },
          body: JSON.stringify(usuario)
        })
        const resBD = await rest.json();
        console.log(resBD)
      } catch (error) {
        console.log(error);
      }
    }

  },
  modules: {
  }
})
