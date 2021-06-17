<template>
  <v-app style="background-color: #f0f0f0" class="justify-center align-center">
    <v-card max-width="60%" class="my-13 align-self-center" id="succed-back">
      <div class="align-content-end">
        <v-card-title class="justify-center">¡Tu propiedad se publicó exitosamente!</v-card-title>
        <v-img class="mx-auto" max-width="90%" src="https://www.bienesonline.com/peru/photos/casa-surco1357930686.jpg" height="300" ></v-img>
        <v-card-actions class="d-flex justify-center">
          <v-btn text @click="navigateToDetailedPost" class="my-4" elevation="2" style="color: white"  x-large id="button-back">Ver publicación</v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "post-succeed",
  methods: {
    navigateToDetailedPost() {
      this.$router.push({name: 'detailed-post'});
    }
  }
}
</script>

<style scoped>
#succed-back{
  background-color: #dddddd;
}

#button-back{
  background-color: #742d5f;
}
</style>