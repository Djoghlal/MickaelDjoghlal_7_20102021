<template>
    <div class="auth-container">
        <h1>{{ Pseudo }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'MainMembers',
        data() {
            return {
              Pseudo: 'Micka'
            }
        }
    }
</script>

<style>
  .auth-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>