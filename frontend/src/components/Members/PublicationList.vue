<template>
    <div class="publication">
        <div class="section-profil">
            <div class="profil-picture">
                <img src="https://avatarfiles.alphacoders.com/163/thumb-1920-163207.jpg" alt="profil-picture" />
            </div>
            <div class="profil-identification">
                <div class="profil-pseudo">Fiireman</div>
                <div class="publication-date">publié le 18/11/2021 à 19h30</div>
            </div>
        </div>
        <div class="message-publication">
            <p>Ici le contenu de la publication !!!</p>
        </div>
    </div>
</template>

<script>
export default ({
  name: 'AddPublication'
})
</script>

<style scoped>
    .publication {
        width: 80%;
        padding: 10px 20px 20px 20px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.8);
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 2px 0px 11px 4px rgba(0,0,0,0);
        box-shadow: 0px 10px 13px -7px #000000, 2px 0px 11px 4px rgba(0,0,0,0);
    }

    .section-profil {
        display: flex;
    }

    .profil-picture img {
        width: 100px;
        height: 100px;
        margin: 0 40px 0 0;
    }

    .profil-identification {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .profil-pseudo {
        font-size: 1.5em;
        color: #003668;
    }

    .publication-date {
        font-style: italic;
    }
</style>
