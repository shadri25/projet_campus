<template>
  <div id="home">
  <div class="home-text-element-graphic">
  <img style="position:absolute; top: 25vh;" src="../assets/img/graphic-element-logo-top.svg" alt="Element graphique">
  <img class="element-graphic-logo-bottom" style="position:absolute; top: 80vh;" src="../assets/img/graphic-element-logo-bottom.svg" alt="Element graphique">

    <div class="text-home-1">
      <h1>Le Campus métropolitain <div style="color: #EC7116">Belfort-Montbéliard</div></h1>
        <div class="line-1"></div>
        <div class="intro"><p>Découvrez les formations et bons plans du Campus Belfort-Montbéliard.</p></div>
    </div>
  </div>
    <h2>3 axes pour vous guider</h2>
    <div class="three-axes">
      <ul>
       <h2>Étudier</h2>
       <div class="line-3"></div>
       <div class="line-2"></div>
        <li>
          Découvrez les différentes formations du territoire Belfort-Montbéliard. 
          Du Bac +1 au doctorat notre campus compte près 50 formations différentes.
        </li>
      </ul>
      
      <ul>
        <h2>Vivre</h2>
        <div class="line-3"></div>
        <div class="line-2"></div>
        <li>
          Le campus vous accompagne dans la recherche de logement ainsi que dans la 
          possibilité d'accéder aux différentes aides financières.
        </li>
      </ul>

      <ul>
        <h2>Sortir</h2>
        <div class="line-3"></div>
        <div class="line-2"></div>
        <li>
          Afin d'alimenter votre bien être découvrez les différents évènements du 
          territoire et les multiples activités scolaires et extra-scolaire.
        </li>
      </ul>
    </div>
    <p>Découvrez les formations et bons plans du Campus Belfort-Montbéliard. écouvrez les formations et bons plans du Campus Belfort-Montbéliard.écouvrez les formations et bons plans du Campus Belfort-Montbéliard.écouvrez les formations et bons plans du Campus Belfort-Montbéliard.écouvrez les formations et bons plans du Campus Belfort-Montbéliard.</p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/graphic-styles.less');
@import url('../assets/layout.less');

#home {
  background-image: url("../assets/img/home.png");
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  margin-top: 2rem;
  background-position-x: 4rem;
}

#home > h2 {
  padding: 5rem;
  font-size: 70px;
  color: white;
}

.three-axes  {
  column-count: 3;
}

.three-axes > ul {
  margin: auto 5vh 5vw 3vh ;
  padding: 2rem;
  width: 21rem;
  height: 18rem;
  background : #211F1E;
  background-repeat: no-repeat;
  box-shadow: black 0px 10px 40px -7px;
}

.three-axes > ul > li{
  color: white;
  font-family: 'Open sans', serif;
}

div.line-2 {
  margin: 1rem;
  border-bottom: 1px solid white;
  width: 106%;
}

div.line-3 {
  margin-top: 0.88rem;
  border-bottom: 5px solid #EBAB7B;
  width: 3%;
  position: absolute;
}

</style>
