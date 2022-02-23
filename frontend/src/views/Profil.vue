<template>
    <div>
        <header-members></header-members>
        <div class="container-profil">
            <h1>Votre profil </h1>
            <show-profil></show-profil>
        </div>
    </div>
</template>

<script>
import HeaderMembers from '../components/Header/HeaderMembers.vue'
import ShowProfil from '../components/Members/ShowProfil.vue'

export default {
  components: {
    HeaderMembers,
    ShowProfil
  }
}
</script>

<style scoped>
    .container-profil {
        width: 1080px;
        margin: 0px auto;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: #F4EFFF;
    }
</style>
