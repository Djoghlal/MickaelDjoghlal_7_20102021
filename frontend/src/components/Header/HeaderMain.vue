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

<style scoped>
  header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    border-bottom: 4px solid #7326BD;
    background-color: #F4EFFF;
    position: fixed;
  }

  .header-container {
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-container img {
    height: 40px;
  }

  nav ul {
    display: flex;
  }

  nav li {
    margin: 0 5px 0 5px;
    padding: 10px;
    list-style-type: none;
    color: #7326BD;
    font-weight: 800;
  }

  nav li >*{
    text-decoration: none;
    color: inherit;
  }

  nav li:hover {
    cursor: pointer;
    border-right: 1px solid #E8E8E8;
    border-left: 1px solid #E8E8E8;
  }

  .icon-nav {
    width: 50px;
    height: 50px;
  }
</style>
