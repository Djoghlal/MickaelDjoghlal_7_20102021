<template>
    <div class="auth-container">
        <div class="connect-group">
        <h1>Identification</h1>
            <div class="connect-member">
                <form ref="form" @submit.prevent="submitLogin">
                  <div class="form-group">
                      <label for="connect-email">Email</label>
                      <div class="input-bloc"><input v-model="user.email" type="email" name="connect-email"/></div>
                  </div>
                  <div class="form-group">
                      <label for="connect-password">Mot de passe</label>
                      <div class="input-bloc">
                        <input v-model="user.password" v-bind:type="passType" />
                        <i v-if="EyeClose" class="far fa-eye-slash icon-password" v-on:click="viewPassword"></i>
                        <i v-if="EyeOpen" class="far fa-eye icon-password" v-on:click="hidePassword"></i>
                      </div>
                  </div>

                  <input type="submit" value="Se connecter" class="btn-global" />

                  <span class="forgotPassword">
                    <i class="fas fa-key"></i>
                    <a href="#">J'ai oublié mon mot de passe</a>

                  </span>

                  <div class="social">
                      <a href="#" class="btn-social btn-github">
                      <i class="fab fa-github icon"></i>
                      Se connecter avec Github
                      </a>

                      <a href="#" class="btn-social btn-google">
                      <i class="fab fa-google icon"></i>
                      Se connecter avec Google
                      </a>

                      <a href="#" class="btn-social btn-facebook">
                      <i class="fab fa-facebook-square icon"></i>
                      Se connecter avec Facebook
                      </a>
                  </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      passType: 'password',
      EyeClose: true,
      EyeOpen: false,
      user: {
        email: undefined,
        password: undefined
      }
    }
  },
  methods: {
    // viewPassword () {
    //   this.passType = 'text',
    //   this.EyeClose = false,
    //   this.EyeOpen = true
    // },
    // hidePassword () {
    //   this.passType = 'password',
    //   this.EyeClose = true,
    //   this.EyeOpen = false
    // },

    submitLogin () {
      axios.post('http://localhost:3000/api/user/login', this.user)
        .then((response) => {
          if (response) {
            console.log('Identifiants correct !!!')
          }

          //Et là, faire le nécessaire pour la sauvegarde du token et la redirection vers le home utilisateur.
          
        })

        .catch(function (error) {
          console.log(error.response)
        })
    }
  }
}
</script>

<style>
  .auth-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .connect-group {
    width: 500px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px 10px 10px 10px;
  }

  .connect-group h1 {
    color: #7326BD;
  }

  .connect-member {
    width: 90%;
  }

  .form-group {
    margin: 10px 0 0 0;
    padding: 10px;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  .form-group label, input {
    display: block;
  }

  .form-group label {
    margin-bottom: 5px;
    text-transform: uppercase;
    font-size: .85em;
  }

  .input-bloc {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #7326BD;
  }

  .input-bloc input {
    width: 80%;
    border: none;
    background: none;
    color: #7326BD;
    padding: 5px;
    font-size: 1.5em;
  }

  .input-bloc input:focus {
    outline-width: 0;
  }

  .icon-password {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
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

  .forgotPassword {
    float: right;
  }

  .forgotPassword a {
    color: #7326BD;
    text-decoration: none;
    cursor: not-allowed;
  }

  .forgotPassword i {
    color: #7326BD;
    margin-right: 10px;
  }

  .social {
    margin: 50px 0 0 0;
  }

  .btn-social {
    text-align: center;
    display: block;
    padding: 12px 16px;
    border-radius: 3px;
    position: relative;
    text-decoration: none;
    margin: 10px 0 0 0;
    cursor: not-allowed;
  }

  .btn-social .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    width: 16px;
    height: 16px;
  }

  .btn-github {
    color: #fff;
    background: #444;
  }

  .btn-google {
    color: #fff;
    background: #dd4b39;
  }

  .btn-facebook {
    color: #fff;
    background: #47639e;
  }
</style>
