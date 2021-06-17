<template>
    <v-container fluid>
        <v-row class="pb-10 pt-7 d-flex justify-center">
            <h1 class="text-h2">¡Da a conocer tu propiedad!</h1>
            <h2 class="text-h6 pt-3">Llena los siguientes datos de tu propiedad y comparte tu inmueble con todos nuestro Roomies.</h2>
        </v-row>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">Ubicación</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">Detalles</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">Multimedia</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-12" height="250px">
                        <v-card-text class="text-center text-h4">¿Donde se encuentra ubicado tu inmueble? </v-card-text>
                        <v-container fill-heigth fluid>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field filled rounded dense label="Calle y número" :rules="rules" hide-details="auto"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field filled rounded dense label="Departamento" :rules="rules" hide-details="auto"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field filled rounded dense label="Provincia" :rules="rules" hide-details="auto"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-text-field filled rounded dense label="Distrito" :rules="rules" hide-details="auto"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                    <v-btn color="amber lighten-1" @click="e1 = 2">SIGUIENTE</v-btn>
                    <v-btn class="cancel-btn" text>CANCELAR</v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card class="mb-12" height="810px">
                        <v-card-title primary-title class="justify-center text-h4" >Danos más detalles del inmueble</v-card-title>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-card-text>Dormitorios</v-card-text>
                                    <v-slider color="orange" min="1" max="10" thumb-label></v-slider>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text>Baños</v-card-text>
                                    <v-slider color="orange" min="1" max="10" thumb-label></v-slider>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text>Medio Baños</v-card-text>
                                    <v-slider color="orange" min="1" max="10" thumb-label></v-slider>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text>Superficie</v-card-text>
                                    <v-text-field filled rounded dense suffix="m^2"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text>Número de pisos</v-card-text>
                                    <v-text-field filled rounded dense></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text>Ascensor(es)</v-card-text>
                                    <v-text-field filled rounded dense></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text>Cuartos de almacenamiento</v-card-text>
                                    <v-text-field filled rounded dense></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text>Piso en el que se encuentra</v-card-text>
                                    <v-text-field filled rounded dense></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-card-text>Antiguedad</v-card-text>
                                    <v-radio-group class="pt-0 mt-0 pl-3" v-model="radioGroup">
                                        <v-radio-group column>
                                            <v-radio label="A estrenar" value="radio-1"></v-radio>
                                            <v-radio label="Usada" value="radio-2"></v-radio>
                                        </v-radio-group>
                                    </v-radio-group>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-card-text>Precio</v-card-text>
                                    <v-text-field filled rounded dense prefix="S/."></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                    <v-btn color="amber lighten-1" @click="e1 = 3">SIGUIENTE</v-btn>
                    <v-btn class="cancel-btn" @click="e1 = 1" text>VOLVER</v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card class="mb-12" height="465px">
                        <v-card-title primary-title class="justify-center text-h3" >Multimedia</v-card-title>
                        <v-spacer/>
                        <v-card-text class="text-center text-h6">¡Agrega fotos y/o vídeos a tu anuncio!</v-card-text>
                        <v-container fluid>
                            <v-row class="pl-3 pr-3">
                                <v-col cols="12" sm="12">
                                    <v-file-input
                                            filled
                                            accept="image/png, image/jpeg, image/bmp"
                                            placeholder="Escoja una foto"
                                            prepend-icon="mdi-camera"
                                            label="Fotos de la propiedad"
                                    ></v-file-input>
                                </v-col>
                                <v-col cols="12" sm="12">
                                    <v-file-input
                                            filled
                                            accept="video/mp4, video/avi, video/flv"
                                            placeholder="Escoja un vídeo"
                                            prepend-icon="mdi-video"
                                            label="Vídeos de presentación"
                                    ></v-file-input>
                                </v-col>
                                <v-col cols="12" sm="12">
                                    <v-file-input
                                            filled
                                            accept="image/png, image/jpeg, image/bmp"
                                            placeholder="Escoja una foto en 360 grados"
                                            prepend-icon="mdi-camera-flip"
                                            label="Fotos 360"
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                    <v-btn color="amber darken-1" to ="/post-succeed">PUBLICAR</v-btn>
                    <v-btn class="cancel-btn" @click="e1 = 2" text>VOLVER</v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>

<script>
    export default {
        name: "create-post",
        data() {
            return {
                e1: 1,
            }
        },
    }
</script>

<style scoped>

    .cancel-btn {
        color: #DA1111;
    }
</style>