<template>
  <div id="app" >
    <v-app >
        <div style="background-color: #f8f8f8" class="content flex" >
          <v-carousel hide-delimiters cycle>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <div class="buttons-container flex" >
            <v-btn elevation="2" x-large>Fotos</v-btn>
            <v-btn elevation="2" x-large>Videos</v-btn>
            <v-btn elevation="2" x-large>360°</v-btn>
          </div>
          <div class="left">
            <v-container fluid>
              <v-card class="py-4">
                <v-card-title>Título</v-card-title>
                <v-card-subtitle>Calle</v-card-subtitle>
                <v-card class="ma-3">
                  <v-simple-table >
                    <template >
                      <thead>
                      <tr>
                        <th class="text-left">
                          Precio
                        </th>
                        <th class="text-left">
                          Dormitorios
                        </th>
                        <th class="text-left">
                          Baños
                        </th>
                        <th class="text-left">
                          m2
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td class="text-center">S/200</td>
                        <td class="text-center">2</td>
                        <td class="text-center">4</td>
                        <td class="text-center">100</td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
                <v-card-title>Descripción</v-card-title>
                <v-card-text>Descripcion Detalle</v-card-text>
                <v-card-title>Ubicación</v-card-title>
                <br>
                <GmapMap
                    :center='center'
                    :zoom='12'
                    style='width:100%;  height: 400px;'
                />

                <v-card class="ma-6">
                  <v-card-actions>
                    <v-btn color="orange lighten-2" text > Normas de Convivencia </v-btn>
                    <v-btn
                        icon
                        @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>
                      <v-card-text> Norma 1 </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>

                <v-card-title> Reseñas </v-card-title>
                <v-card max-width="50%" class="mx-4 rounded-lg" >
                  <v-card-text>Fecha</v-card-text>
                  <v-card-title> Título Reseña</v-card-title>
                  <v-card-text>Descripcion</v-card-text>
                  <v-divider></v-divider>
                  <v-card-text class="font-weight-bold">¿Fue útil esta reseña?</v-card-text>
                  <v-btn icon color="black" @click="like">
                    <v-icon>mdi-heart-outline</v-icon>
                  </v-btn>
                </v-card>
                <v-card-title>Datos del Arrendador</v-card-title>
                <v-card max-width="40%" class="ma-3">
                  <v-card-subtitle>Nombre</v-card-subtitle>
                  <v-card-subtitle>DNI</v-card-subtitle>
                  <v-card-subtitle>Teléfono</v-card-subtitle>
                  <v-card-subtitle>Celular</v-card-subtitle>
                </v-card>
              </v-card>
            </v-container>
          </div>
          <div class="right">
            <v-container fluid>
              <v-card>
                <v-card-title>Contacta al arrendador</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="6" md="6" >
                      <v-text-field
                          label="Nombre"
                          solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" >
                      <v-text-field
                          label="Teléfono"
                          solo
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="12" >
                      <v-text-field
                          label="Email"
                          solo
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="12" >
                      <v-textarea solo label="Email" >Mensaje</v-textarea>

                    </v-col>

                  </v-row>

                  <v-btn block
                         rounded
                         color=#FBA31A
                         elevation="3"
                  >Contactar</v-btn>

                </v-card-text>
              </v-card>
            </v-container>
          </div>
        </div>
    <div class="center">
      <v-row>
        <v-col cols="12" sm="12">
          <h1 class="text-h5">Propiedades que te puedan interesar</h1>
        </v-col>
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
                <v-card-subtitle style="font-size: 120%; " v-text="card.district"></v-card-subtitle>
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
      </v-row>
    </div>
    </v-app>
  </div>
</template>

<script>


export default {
  name: "detailed-post",

  data() {

    return {

      cards: [
        { id: 1,src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3, price: 'S/ 1800', district: 'San Miguel, Lima', avenue: 'aea1', value: 2.5, description: "Alquilo Departamento en San Miguel", btn_dsc: false },
        { id: 2,src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, price: 'S/ 1600', district: 'Los Olivos, Lima', avenue: 'aea2', value: 3.5, description: "Alquilo Departamento en Los Olivos", btn_dsc: false },
        { id: 3,src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, price: 'S/ 900', district: 'Miraflores, Lima', avenue: 'aea3', value: 4.5, description: "Alquilo Departamento en Miraflores", btn_dsc: false },
        { id: 4,src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3, price: 'S/ 2100', district: 'Surco, Lima', avenue: 'aea4', value: 4.5, description: "Alquilo Departamento en Surco", btn_dsc: false },
      ],

      center: { lat: 45.508, lng: -73.587 },
      show:false,
      items: [
        {
          src: 'https://www.ikea.com/images/a-seaside-inspired-living-room-with-light-blue-walls-a-yello-1eb4947d7347f27fd44899946f62c8f7.jpg',
        },
        {
          src: 'https://images.homify.com/images/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1441129273/p/photo/image/728897/1_-_Day_/fotos-de-banos-de-estilo-clasico-de-homify.jpg',
        },
        {
          src: 'https://cdn11.bigcommerce.com/s-31djhj4ixx/images/stencil/1280x1280/products/2086/2983/Mocka_Darcy_Bed_-_Grey_7__41202.1593664401.jpg?c=1',
        },
        {
          src: 'https://www.haecker-kuechen.com/fileadmin/images/kitchen-styles/classic/malaga/malaga_graphit_header.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>

.center {
  padding: 2%;
  float: none;
}

.right {
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 10px;
  float: left;
  position: relative;
  width: 30%;
  height: 100%;
}

.buttons-container{
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}

.first-information-container div p{
  padding-bottom: 0px;
  margin-bottom: 0px;
}

.content {
  width: 100%;
}

.left {
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 10px;
  float: left;
  position: relative;
  width: 65%;
  height: auto;
}

tr:hover {
  background-color: transparent !important;
}

table td {
  border-top: none;
}

table th + th { border-left:1px solid #dddddd; }
table td + td { border-left:1px solid #dddddd; }

</style>