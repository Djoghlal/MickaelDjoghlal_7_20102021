<template>
    <div>
        <HeaderMain></HeaderMain>
        <Main></Main>
        <TheRegister></TheRegister>
    </div>
</template>

<script>
    import HeaderMain from '../components/Header/HeaderMain.vue';
    import Main from '../components/TheMain.vue';
    import TheRegister from '../components/TheRegister.vue';

    export default {
        components: {
            HeaderMain,
            Main,
            TheRegister
        }
    }
</script>
