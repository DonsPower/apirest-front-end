<template>
    <div>
    
      <v-app-bar
      app
      color="#682444"
      dark
      elevation="0"
      height="58%"
      scroll-target="#scrolling-techniques-6"
      >
      <v-app-bar-nav-icon  v-if="drawer==false " @click=" drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Control de acceso por área</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn 
        class="ma-2"
        outlined
        color="white"
        to="/"
      >
        HOME
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="white"
        to="/login"
      >
        LOGIN
      </v-btn>
    </v-app-bar>
   
    <v-navigation-drawer
        app
        v-model="drawer"  
        color="#AC9894"
        dark
    >
    <v-card         
        class="sm-auto"
        max-width="300"
        color="#682444"
    > 
        <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title >Developer</v-list-item-title>
            </v-list-item-content>
            
            <v-btn class="ma-2" text icon color="blue lighten-5" @click="drawer=false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
            </v-list-item>  
            </v-card>
            <v-list-item v-for="i in item" :key="i.text" router :to="i.route">
            <v-list-item-action>
                <v-icon >{{i.icon}}</v-icon>
            </v-list-item-action>
             <v-list-item-content>
                <v-list-item-title
                >{{i.text}}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>

        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer:false,
            item:[
          {icon: 'mdi-home', text: 'Inicio', route: '/'},
          {icon: 'mdi-account-key', text: 'Administrador', route: '/about'}
      ],
    
        }
    },
}
</script>