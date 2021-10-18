<template>
    <div>
        <Header></Header>
        <Main></Main>
        <TheLogin></TheLogin>
    </div>
</template>

<script>
    import Header from '../components/Header/Header.vue';
    import Main from '../components/TheMain.vue';
    import TheLogin from '../components/TheLogin.vue';

    export default {
        components: {
            Header,
            Main,
            TheLogin
        }
    }
</script>
