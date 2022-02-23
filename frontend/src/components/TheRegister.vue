<template>
<div class="auth-container">
  <div class="register-group">
    <h1>Création compte</h1>
    <div class="register-member">
      <form ref="form" @submit.prevent="submitRegister">
        <div class="form-group">
          <label for="register-email">Email</label>
          <div class="input-bloc"><input v-model="user.email" type="email" name="register-email"/></div>
        </div>
        <div class="form-group">
          <label for="register-password">Mot de passe</label>
          <div class="input-bloc">
            <input v-model="user.password" v-bind:type="passType" />
            <i v-if="EyePasswordClose" class="far fa-eye-slash icon-password" v-on:click="viewPassword"></i>
            <i v-if="EyePasswordOpen" class="far fa-eye icon-password" v-on:click="hidePassword"></i>
          </div>
        </div>
        <div class="form-group">
          <label for="register-confirm">Confirmation Mot de passe</label>
          <div class="input-bloc">
            <input type="password" />
          </div>
        </div>

        <input type="submit" value="Création de mon compte" class="btn-global" />
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
      confirmType: 'password',
      EyePasswordClose: true,
      EyePasswordOpen: false,
      user: {
        email: undefined,
        password: undefined
      }
    }
  },

  methods: {
  //   viewPassword () {
  //     this.passType = 'text',
  //     this.EyePasswordClose = false,
  //     this.EyePasswordOpen = true
  //   },
  //   hidePassword () {
  //     this.passType = 'password',
  //     this.EyePasswordClose = true,
  //     this.EyePasswordOpen = false
  //   },

    submitRegister () {
      axios.post('http://localhost:3000/api/user/register', this.user)
        .then(() => {
          alert('Utilisateur créé !!')
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

  .register-group {
    width: 500px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px 10px 10px 10px;
  }

  .register-group h1 {
    color: #7326BD;
  }

  .register-member {
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
    width: 30px;
    height: 30px;
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
