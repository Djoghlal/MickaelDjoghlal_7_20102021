<template>
    <div class="add-publication">
        <h2>Dites-nous ce que vous voulez...</h2>
        <form>
            <textarea placeholder="Ecrivez votre message..."></textarea>
            <div class="section-bouton">
                <input type="button" value="Publier mon article" class="btn-global" />
                <input type="button" value="Insérer une image" class="btn-global" />
            </div>
        </form>
    </div>
</template>

<script>
export default ({
  name: 'AddPublication'
})
</script>

<style scoped>
    .add-publication {
        width: 80%;
        padding: 10px 20px 20px 20px;
        margin: 20px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.8);
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 2px 0px 11px 4px rgba(0,0,0,0);
        box-shadow: 0px 10px 13px -7px #000000, 2px 0px 11px 4px rgba(0,0,0,0);
    }

    h2 {
        font-size: 1.25rem;
        font-family: Montserrat;
        font-weight: 700;
        line-height: 1.875rem;
        color: #003668;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0 0 0;
    }

    textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
    }

    .section-bouton {
        display: flex;
    }

    .btn-global {
        padding: 15px;
        border: 1px solid #7326BD;
        border-radius: 5px 5px 5px 5px;
        background-color: #F4EFFF;
        color: #7326BD;
        margin: 30px 0 0 10px;
    }

    .btn-global:hover {
        background-color: #e7defa;
        cursor: pointer;
    }
</style>
