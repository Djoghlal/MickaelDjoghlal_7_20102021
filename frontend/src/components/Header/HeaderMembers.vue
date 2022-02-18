<template>
  <header>
    <div class="header-container">
      <router-link to="/">
        <img src="https://projet-7.dev-web.fr/assets/logo/logo.png" alt="Groupomania" />
      </router-link>
     <nav>
        <ul>
          <li><router-link to="notification"><i class="fas fa-bolt"></i></router-link></li>
          <li><router-link to="community"><i class="fas fa-user-friends"></i></router-link></li>
          <li><router-link to="profil"><i class="profil-icon fas fa-user-circle"></i></router-link></li>
          <li><router-link to="logout"><i class="fas fa-power-off"></i></router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderMain'
}
</script>

<style scoped src="./Header.css">

</style>
