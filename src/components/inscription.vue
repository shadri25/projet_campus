<template>
  <div id="inscription">
  <div class="home-text-element-graphic">

    <div class="text-home-1">
      <h1>{{msg}}</h1>
        <div class="line-1"></div>
        <div class="intro"><p>Découvrez les formations et bons plans du Campus Belfort-Montbéliard.</p></div>
    </div>
  </div>
    <h2>S’inscrire dans l’enseignement supérieur </h2>
  </div>
</template>

<script>
export default {
  name: 'Inscription',
  data () {
    return {
      msg: 'INSCRIPTION'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/graphic-styles.less');
@import url('../assets/layout.less');

#inscription {
    background-image: url("../assets/img/inscription.png");
    background-repeat: no-repeat;
    background-position-y: 0;
}
</style>
