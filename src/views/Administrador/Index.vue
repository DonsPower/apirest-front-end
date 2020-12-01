<template>
    <div class="container">
       <v-titulo msg="Alta de administradores"></v-titulo>
       <div class="container">
           <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="addUser(usuario)"
            >
                <v-text-field
                v-model="usuario.username"
                :counter="10"
                :rules="nameRules"
                label="Username"
                required
                ></v-text-field>

                <v-text-field
                :type="'password'"
                v-model="usuario.password"
                :rules="passRules"
                label="Password"
                required
                ></v-text-field>
                <v-text-field
                v-model="usuario.role"
                label="ROL"
                :rules="RolRules"
                required
                ></v-text-field>

                <v-btn
                :disabled="!valid"
                color="success"
                type="submit"
                class="mr-4"
                @click="validate"
                >
                Guardar
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Borrar
                </v-btn>
            </v-form>
       </div>
       <div class="container">
           <v-titulo msg="Administradores dados de alta en el sistema"></v-titulo>
           <v-row v-for="(i, key) in userSystem" :key="key" >
               <v-col >
                   {{i.username}}
               </v-col>
               <v-col>
                   {{i.role}}
               </v-col>
               <v-col>
                   {{i.createAt}}
               </v-col>
           </v-row>
       </div>
    </div>
</template>
<script>
import titulo from '@/components/Titulos.vue'
import {mapActions, mapState} from 'vuex'
export default {
    components:{
        'v-titulo' : titulo
    },
    name: 'Index',
    data() {
        return {
            valid: true,
            username: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            password: '',
            passRules: [
                v => !!v || 'Password is required',
            ],
            role: '',
            RolRules: [
                v => !!v || 'Rol is required',
            ],
            //Creo el objeto usuario para pasar los datos

            usuario:{
                username: 'prueba1',
                password: 'Prueba1',
                role: 'notadmin'
            },
            userSystem:''
        }
    },
    computed:{
        ...mapState(['token']),
    },
    methods: {
        ...mapActions(['addUser']),
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        async allUser(){
            try {
                const res= await fetch('https://donasapiback.herokuapp.com/users',{
            headers:{
              'Content-Type' : 'application/json',
              'auth' : this.token
            }
          })
          const dataServer = await res.json();
          console.log(dataServer)
          this.userSystem= dataServer;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.allUser()
    }
}
</script>