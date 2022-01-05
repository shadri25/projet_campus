<template>
  <div id="bibliotheques">
  <div v-for="bibliotheque in listeBibliotheques" :key="bibliotheque.id" class="bibliotheque">
    <h2>{{ bibliotheque.acf.titre }}</h2>
    <p>{{ bibliotheque.acf.description }}</p>
    <img :src="bibliotheque.acf.image.url" alt="Image">
    <p>{{ bibliotheque.acf.adresse }}</p>
    <a v-bind:href="bibliotheque.acf.site_web">Site web</a>
  </div>
  </div>
</template>

<script>
import param from '@/param/param'
import axios from 'axios';
import _ from 'lodash';
export default {
  name: 'bibliotheques',
  data() {
    return {
      listeBibliotheques: []
    }
  },
  created() {
    // Liste des sections
    axios.get(param.host + 'bibliotheques')
      .then(response => {
        console.log('Réponse :', response);
        this.listeBibliotheques = response.data;
      })
      .catch(error => console.log(error))
  },

}</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/graphic-styles.less');
@import url('../assets/layout.less');



</style>
