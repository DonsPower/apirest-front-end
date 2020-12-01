<template>
    <div>
        <div class="container">
            <v-card
                elevation="5"
            >  
             <v-card-title>Login - Control acceso</v-card-title> 
             <div class="container">  
             <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                 @submit.prevent="login(usuario)"
            >
                <v-text-field
                v-model="usuario.username"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
                ></v-text-field>
                
                <v-text-field
                :type="'password'"
                v-model="usuario.password"
                :rules="passRules"
                label="Password"
                required
                ></v-text-field>
                <v-btn
                type="submit"
                :disabled="!valid"
                color="success"
                @click="validate"
                >
                Validate
                </v-btn>

                <v-btn
                color="error"
                @click="reset"
                >
                Reset Form
                </v-btn>
            </v-form>
            </div>
            </v-card>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

  export default {
    data() {
        return {
            valid: true,
            username: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            password: '',
            passRules: [
                v => !!v || 'Password is required',
            ],
            usuario: {
                username: 'ADMIN',
                password: 'ADMIN1'
            }
        }
    },

    methods: {
        ...mapActions(['login']),

      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  }
</script>