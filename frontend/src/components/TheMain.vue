<template>
    <main>
        <video poster="../assets/Images/bg-default.png" id="bgDefault" playsinline autoplay muted loop>
        <source src="../assets/movies/background-default.mp4" type="video/mp4">
        </video>
    </main>
</template>

<script>
    export default {
        name: 'Main'
    }
</script>

<style>
    #bgDefault { 
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -100;
        transform: translateX(-50%) translateY(-50%);
        background: url('../assets/Images/bg-default.png') no-repeat;
        background-size: cover;
        opacity: 0.35;
    }
</style>