<template>
  <v-app>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8">
          <v-card>
            <v-card-title primary-title class="justify-center text-h3 pt-8 pb-6">Iniciar sesión</v-card-title>
            <v-spacer/>
            <v-container fluid>
              <v-row class="d-flex justify-center">
                <v-col cols="12" sm="10" class="pb-5">
                  <v-text-field filled rounded dense label="Correo electrónico" hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="12" sm="10" class="pb-9">
                  <v-text-field filled rounded dense label="Contraseña" hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="12" sm="10" class="pb-5">
                  <v-btn block elevation="2" x-large color="amber darken-1">Iniciar Sesión</v-btn>
                </v-col>
                <v-col cols="12" sm="10" class="pb-5">
                  <v-btn block elevation="2" x-large color="amber lighten-1">Registrarme en Roomies</v-btn>
                </v-col>
                <v-col cols="12" sm="10">
                  <v-btn text block color="amber lighten-1">Olvidé mi contraseña</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

</style>