<template>
  <div>
    <v-app>
      <v-card class="mx-auto">
        <div class="content">
          <div class="left">
            <v-card>
              <v-card-text>Ubicación</v-card-text>
              <v-col cols="12" md="12">
                <v-autocomplete v-model="value" :items="items" dense filled label="Departamento"></v-autocomplete>
              </v-col>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-autocomplete v-model="value" :items="items" dense filled label="Provincia"></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-autocomplete v-model="value" :items="items" dense filled label="Distrito"></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-text>Precio (S/.)</v-card-text>
              <v-card-text>
                <v-row>
                  <v-col class="px-4">
                    <v-range-slider v-model="range_p" :max="max_p" :min="min_p" class="align-center" step="100">
                      <template v-slot:prepend>
                        <v-text-field :value="range_p[0]" class="mt-0 pt-0" single-line type="number" style="width: 60px" @change="$set(range_p, 0, $event)"></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field :value="range_p[1]" class="mt-0 pt-0" single-line type="number" @change="$set(range_p, 1, $event)"></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text>Superficie (m^2)</v-card-text>
              <v-card-text>
                <v-row>
                  <v-col class="px-4">
                    <v-range-slider v-model="range_s" :max="max_s" :min="min_s" class="align-center" step="10">
                      <template v-slot:prepend>
                        <v-text-field :value="range_s[0]" class="mt-0 pt-0" single-line type="number" style="width: 60px" @change="$set(range_s, 0, $event)"></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field :value="range_s[1]" class="mt-0 pt-0" single-line type="number" @change="$set(range_s, 1, $event)"></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text>Cantidad de Habitaciones</v-card-text>
              <v-container fluid>
                <v-radio-group v-model="row" row>
                  <v-radio
                      label="1"
                      value="radio-1"
                  ></v-radio>
                  <v-radio
                      label="2"
                      value="radio-2"
                  ></v-radio>
                  <v-radio
                      label="3+"
                      value="radio-3"
                  ></v-radio>
                </v-radio-group>
              </v-container>
              <v-card-text>Cantidad de Baños</v-card-text>
              <v-container fluid>
                <v-radio-group v-model="row" row>
                  <v-radio
                      label="1"
                      value="radio-1"
                  ></v-radio>
                  <v-radio
                      label="2"
                      value="radio-2"
                  ></v-radio>
                  <v-radio
                      label="3+"
                      value="radio-3"
                  ></v-radio>
                </v-radio-group>
              </v-container>
            </v-card>
          </div>
          <div class="right">
            <v-container fluid>
              <v-row dense>
                <v-col v-for="card in cards" :key="card.id" :cols="card.flex">
                  <v-card>
                    <v-img :src="card.src" height="200px" style="float: right; margin: 0px 0px 15px 15px;">
                      <v-card-actions>
                        <v-btn icon color="white" @click="favourite">
                          <v-icon>mdi-heart-outline</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-img>
                    <v-card-title v-text="card.price"></v-card-title>
                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating :value=card.value color="amber" dense half-increments readonly size="14"></v-rating>
                      </v-row>
                    </v-card-text>
                    <v-card-subtitle style="font-size: 130%; " v-text="card.district"></v-card-subtitle>
                    <v-card-subtitle class="my-0 text-sm-body-1" v-text="card.description"></v-card-subtitle>
                    <v-card-text>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="deep-purple lighten-2" text @click="contact">
                        Contacto
                      </v-btn>
                      <v-btn color="deep-purple lighten-2" text @click="navigateToDetailedPostId(card.id)">Descripción</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <v-pagination
            class="pagination"
            v-model="page"
            :length="5"
            color="grey"
            circle
        ></v-pagination>
      </v-card>
    </v-app>
  </div>
</template>
<script>
//import LeaseholderApiService from '../services/leaseholder-api.service';
export default {
  name: "posts",

  //estos datos deben salir de la clase leaseholder, ¿como hacerlo? idk XD
  data: () => ({
        cards: [
          { id: 1,src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4, price: 'S/ 1800', district: 'San Miguel, Lima', avenue: 'aea1', value: 2.5, description: "Alquilo Departamento en San Miguel", btn_dsc: false },
          { id: 2,src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, price: 'S/ 1600', district: 'Los Olivos, Lima', avenue: 'aea2', value: 3.5, description: "Alquilo Departamento en Los Olivos", btn_dsc: false },
          { id: 3,src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4, price: 'S/ 900', district: 'VMT, Lima', avenue: 'aea3', value: 4.5, description: "Alquilo Departamento en Villa María del Triunfo", btn_dsc: false },
          { id: 4,src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4, price: 'S/ 2100', district: 'Independencia, Lima', avenue: 'aea4', value: 4.5, description: "Alquilo Departamento en Indepencia", btn_dsc: false },
          { id: 5,src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, price: 'S/ 1100', district: 'San Isidro, Lima', avenue: 'aea5', value: 3.0, description: "Alquilo Departamento en San Isidro", btn_dsc: false },
          { id: 6,src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4, price: 'S/ 1300', district: 'Magdalena, Lima', avenue: 'aea6', value: 3.5, description: "Alquilo Departamento en Madgalena", btn_dsc: false },
          { id: 7,src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4, price: 'S/ 1550', district: 'Surco, Lima', avenue: 'aea7', value: 1, description: "Alquilo Departamento en Surco", btn_dsc: false },
        ],

        items: ['San Miguel', 'San Isidro', 'fizz', 'buzz'],


        min_p: 0,
        max_p: 5000,
        range_p: [1000, 2000],

        min_s: 0,
        max_s: 200,
        range_s: [48, 120],

        page: 1,
      }
  ),
  methods: {
    navigateToDetailedPost() {
      this.$router.push({name: 'detailed-post'});
    },

    navigateToDetailedPostId(id) {
      this.$router.push({name: 'detailed-post', params: { id: id}});
    }
  }

}

</script>

<style scoped>



.content {
  width: auto;
}

.left {
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 10px;
  float: left;
  position: relative;
  width: 30%;
  height: auto;
}

.right {
  padding-top: 5px;
  padding-left: 5px;
  margin-left: 5px;
  position: relative;
  float: left;
  width: 65%;
  height: auto;
}

.pagination {
  padding-top: 30px;
  padding-bottom: 30px;
}

</style>