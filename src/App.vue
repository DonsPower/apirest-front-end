<template>
  <v-app>
    <v-top></v-top>    
    <v-main>
      <button @click="cerrarsesion">
        Cerrar sesion 
      </button>
      
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
import top from '@/components/Top.vue'

export default {
  name: 'App',
  components:{
    'v-top': top
  },
  methods: {
    ...mapActions(['leerToken', 'cerrarsesion'])
  },
  mounted(){
    //TODO: ADD EVENTO CLOSE WINDOW

  },
  created() {
    //Primero que se ejecuta en el DOM
    this.leerToken()
  
  },
};
</script>
