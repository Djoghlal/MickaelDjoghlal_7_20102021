<template>
  <header>
    <div class="header-container">
      <router-link to="/">
        <img src="https://projet-7.dev-web.fr/assets/logo/logo.png" alt="Groupomania" />
      </router-link>
     <nav>
        <ul>
          <li><router-link to="/">S'identifier</router-link></li>
          <li><router-link to="Register">S'inscrire</router-link></li>
          <li><router-link to="Home">Espace membre (temporaire)</router-link></li>
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
