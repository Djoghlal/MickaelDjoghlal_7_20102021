<template>
    <HeaderMembers></HeaderMembers>
    <div class="container-home">
        <h1>Dernières publications</h1>
        <add-publication></add-publication>
    </div>
</template>

<script>
    import HeaderMembers from '../components/Header/HeaderMembers.vue';
    import AddPublication from '../components/Members/AddPublication.vue';

    export default {
        components: {
            HeaderMembers,
            AddPublication
        }
    }
</script>

<style>
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

