<template>
    <div>
        <Header></Header>
        <Main></Main>
        <TheRegister></TheRegister>
    </div>
</template>

<script>
    import Header from '../components/Header/Header.vue';
    import Main from '../components/TheMain.vue';
    import TheRegister from '../components/TheRegister.vue';

    export default {
        components: {
            Header,
            Main,
            TheRegister
        }
    }
</script>
