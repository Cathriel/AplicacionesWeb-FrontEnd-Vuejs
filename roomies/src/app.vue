<template>
  <v-app>
    <v-app-bar app color="#fba31a" fixed >

      <v-img src="./assets/logoRoomies.png" max-width="8%" ></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/leaseholder">Buscar inmueble</v-btn>
        <v-btn text to="/create-post">Publicar anuncio</v-btn>
        <v-btn text to="/login">Iniciar sesión</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
    <v-footer color="#fba31a">
      <v-card class="flex" flat tile color="#fba31a">
        <v-card-title>
          <strong >Roomies 2021</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>
          <v-card-text align="center">
            {{ new Date().getFullYear() }} — <strong>Roomies</strong>
          </v-card-text>
        </v-card-subtitle>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({

    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ]

  }),
  components: {
  },
};
</script>