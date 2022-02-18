<template>
    <div class="profil">
        <div class="section-profil">
            <div class="profil-picture">
                <img src="https://avatarfiles.alphacoders.com/163/thumb-1920-163207.jpg" alt="profil-picture" />
            </div>
            <div class="profil-pseudo"><h2>Fiireman</h2></div>
            <div class="profil-identification">
                <ul>
                    <li><span><i class="fas fa-baby"></i> Date de naissance : </span></li>
                    <li><span><i class="far fa-calendar-alt"></i> Date d'entrée en entreprise : </span></li>
                    <li><span><i class="fas fa-building"></i> Poste occupé : </span></li>
                    <li><span><i class="fas fa-at"></i> Adresse e-mail : </span></li>
                </ul>
                <ul>
                    <li>le 24/05/1991</li>
                    <li>le 11/02/2016</li>
                    <li>Chargé de communication</li>
                    <li>micka.fiireman@outlook.fr</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
  name: 'ShowProfil'
})
</script>

<style scoped>
    .profil {
        width: 80%;
        height: 500px;
        padding: 10px 20px 50px 20px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.8);
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 2px 0px 11px 4px rgba(0,0,0,0);
        box-shadow: 0px 10px 13px -7px #000000, 2px 0px 11px 4px rgba(0,0,0,0);
    }

    .section-profil {
        display: flex;
        flex-direction: column;
    }

    .profil-picture {
        margin: 20px 0 20px 0;
        text-align: center;
    }

    .profil-picture img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    .profil-identification {
        height: 100px;
        display: flex;
    }

    .profil-identification ul {
        margin-top: 50px;
    }

    .profil-identification li {
        list-style: none;
        font-size: 1.3em;
        margin-bottom: 5px;
    }

    .profil-identification span {
        width: auto;
        margin-right: 10px;
        color: #003668;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .profil-pseudo h2 {
        font-size: 1.8em;
        color: #003668;
        text-align: center;
        font-weight: 100;
        letter-spacing: 4px;
        text-transform: uppercase;
        font-family: 'Raleway', sans-serif;
    }
</style>
