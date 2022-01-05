<template>
  <div id="app">
  <header>
    <router-link to="/inscription">
      <img src="./assets/img/logo.svg" alt="Logo du Campus Belfort-Montbéliard">
    </router-link>
        <nav id="menu" class="right show">
          <ul>
            <li>
            <a href="#" class="active">Étudier</a>
              <!--<ul>
                <li><a href="#">Inscription</a></li>
                <li><a href="#">Formations</a></li>
                <li><a href="#">Bibliothèques</a></li>
              </ul>-->
              </li>
            <li><a href="#">Vivre</a></li>
            <li><a href="#">Sortir</a>
            <li><a href="#">Contact</a></li>
          </ul>

        </nav>
    </header>
    <router-view/>
        <img class="large-rectangle" src="./assets/img/large-rectangle.svg" alt="Logo du Campus Belfort-Montbéliard">
  
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('assets/graphic-styles.less');
@import url('assets/layout.less');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #181615;
}
header {
  padding: 2rem;
}

.large-rectangle {
  position: absolute;
  top: 25%;
  left: -1%;
}
</style>
