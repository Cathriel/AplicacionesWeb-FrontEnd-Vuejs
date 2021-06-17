<template>
  <div class="mainContent" >
    <p class="text-center text-h4 pt-8">Bienvenido a Roomies</p>

    <v-container fluid id="background">
      <p class="text-center text-h4 mb-5 pt-3 pb-6"><b>Compartida la vida es más bonita</b></p>
      <v-row class="d-flex justify-center pb-5">
        <v-col cols="12" sm="4">
          <v-card id="roomie-back">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Tu compañero ideal</v-card-title>
                <hr>
                <v-card-subtitle class="text--white">Roomies cuenta con una variedad de filtros para
                  encontrar al roomate que tenga mayor compatibilidad contigo.</v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img src="https://cathriel.github.io/Aplicaciones_Web/img/friends.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card id="home-back">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Tu hogar soñado</v-card-title>
                <hr>
                <v-card-subtitle>Roomies te ofrece una gran cantidad de anuncios de
                  inmuebles para compartir con tu roomate, en alquiler.</v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img src="https://cathriel.github.io/Aplicaciones_Web/img/home.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-card-text class="text-left text-h6 pt-7">Últimas publicaciones</v-card-text>
    <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="2000"
    >
      <v-slide-group
          v-model="model"
          class="pa-2"
          show-arrows
      >
        <v-slide-item
            v-for="inmueble in inmuebles"
            :key="inmueble"
            v-slot="{ active, toggle }"
        >
          <v-card
              :color="active ? 'orange lighten-4' : 'blue-grey lighten-5'"
              class="ma-3 "
              width="500"
              @click="toggle"
          >
            <v-card-title primary-title
                          class="justify-center black--text"
                          v-text="inmueble.name">

            </v-card-title>

            <v-img
                :src="inmueble.image"
                height="200px"
                width="100%"
                class="justify-center"
            ></v-img>
            <v-card-text>
              <v-row
                  align="center"
                  class="mx-0"
              >
                <v-rating
                    :value="inmueble.calification"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="black--text ms-2">
                  {{ inmueble.calification}}
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1" >
                <p v-text="inmueble.district + ', ' + inmueble.department ">Hola</p>
              </div>

              <p class="subtitle-1 text-justify" v-text="inmueble.description"></p>

            </v-card-text>
            <v-card-actions>
              <v-col class="text-right">
                <v-btn
                    class="ml-2"
                    color="primary"
                >
                  Visitar
                </v-btn>
              </v-col>


            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'unlogged-home',

  data () {
    return{
      inmuebles: [
        {
          name: 'Calle Los Langostinos 458',
          district: 'San Juan de Miraflores',
          department: 'Lima',
          image:'https://img10.naventcdn.com/avisos/11/00/50/67/23/63/1200x1200/29572941.jpg',
          price:1500,
          calification:4,
          description: 'Alquiler Departamento Amoblado en San Juan de Miraflores'
        },
        {
          name: 'Calle Los Juanes 120',
          district: 'La Molina',
          department: 'Lima',
          image:'https://www.bienesonline.com/peru/photos/casa-salamanca-13722879290.jpg',
          price:950,
          calification:5,
          description: 'Alquiler Departamento Nuevo en La Molina'
        },
        {
          name: 'Av. El Sol 157',
          district: 'Chorrillos',
          department: 'Lima',
          description:'Alquiler Departamento en Chorrillos',

          image:'https://img10.naventcdn.com/avisos/111/00/60/46/98/52/720x532/246463138.jpg',
          price:1000,
          calification:3
        }
      ]

    }
  },
  methods:{

  }

}
</script>

<style scoped>
#background {
  background-color: #F8F2FE;
}

#roomie-back{
  background-color: #AC8AA8;
}

#home-back{
  background-color: #FDC84C;
}
</style>
