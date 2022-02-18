<template>
    <div>
        <HeaderMembers></HeaderMembers>
        <div class="container-home">
            <h1>Dernières publications</h1>
            <AddPublication></AddPublication>
            <PublicationList></PublicationList>
        </div>
    </div>
</template>

<script>
import HeaderMembers from '../components/Header/HeaderMembers.vue'
import AddPublication from '../components/Members/AddPublication.vue'
import PublicationList from '../components/Members/PublicationList.vue'

export default {
  components: {
    HeaderMembers,
    AddPublication,
    PublicationList
  }
}
</script>

<style scoped>
    .container-home {
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
