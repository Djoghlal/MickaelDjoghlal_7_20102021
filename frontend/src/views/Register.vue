<template>
    <div>
        <HeaderMain></HeaderMain>
        <TheRegister></TheRegister>
    </div>
</template>

<script>
    import HeaderMain from '../components/Header/HeaderMain.vue';
    import TheRegister from '../components/TheRegister.vue';

    export default {
        components: {
            HeaderMain,
            TheRegister
        }
    }
</script>
