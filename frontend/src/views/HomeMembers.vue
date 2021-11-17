<template>
    <div>
        <HeaderMembers></HeaderMembers>
        <Main></Main>
        <MainMembers></MainMembers>
    </div>
</template>

<script>
    import HeaderMembers from '../components/Header/HeaderMembers.vue';
    import Main from '../components/TheMain.vue';
    import MainMembers from '../components/Member/MemberMain.vue';

    export default {
        components: {
            HeaderMembers,
            Main,
            MainMembers
        }
    }
</script>
