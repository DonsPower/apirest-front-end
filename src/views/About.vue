<template>
  <div class="container">
    <v-titulo msg="Bienvenido a la administración"></v-titulo>
    <div class="container">
      <v-row>
        <v-col >
          <v-card elevation="4" width="100%" height="90%" >
          <v-card-title>
          <v-icon
          large
          left
          >
          mdi-account-multiple-plus
          </v-icon> 
          <span class="title font-weight-light">Alta de administradores</span>
            <v-btn text color="orange" to="/administrador/index">Agregar</v-btn>
          </v-card-title>
        </v-card>
        </v-col>
        <v-col>
          <v-card elevation="4" width="100%" height="90%" >
          <v-card-title>
          <v-icon
          large
          left
          >
          mdi-account-plus
          </v-icon> 
          <span class="title font-weight-light">Registro de población fija</span>
            <v-btn text color="orange" to="/administrador/index">Agregar</v-btn>
          </v-card-title>
        </v-card>
        </v-col>
        <v-col>
          <v-card elevation="4" width="100%" height="90%" >
        <v-card-title>
        <v-icon
        large
        left
        >
        mdi-account-plus
        </v-icon> 
        <span class="title font-weight-light">Registro de visitantes</span>
          <v-btn text color="orange" to="/administrador/index">Agregar</v-btn>
        </v-card-title>
      </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
  
</template>
<script>
import {mapState} from 'vuex'
import titulo from '@/components/Titulos.vue'
export default {
    components:{
      'v-titulo':titulo
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      async datosProtegidos(){
        try {
          const res= await fetch('https://donasapiback.herokuapp.com/users',{
            headers:{
              'Content-Type' : 'application/json',
              'auth' : this.token
            }
          })
          const dataServer = await res.json();
          console.log(dataServer)
        } catch (error) {
          console.log(error)
        }
      }
    },
    created() {
      //iniciamos en el dom
      this.datosProtegidos()
    },
}
</script>
