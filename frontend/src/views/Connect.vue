<template>
    <div>
        <HeaderMain></HeaderMain>
        <Main></Main>
        <TheLogin></TheLogin>
    </div>
</template>

<script>
    import HeaderMain from '../components/Header/HeaderMain.vue';
    import Main from '../components/TheMain.vue';
    import TheLogin from '../components/TheLogin.vue';

    export default {
        components: {
            HeaderMain,
            Main,
            TheLogin
        }
    }
</script>
