<template>
<div class="auth-container">
  <div class="register-group">
    <h1>Création compte</h1>
    <div class="valide">{{ validReturn }}</div>
    <div class="register-member">
      <form ref="form" @submit.prevent="submitRegister">
        <div class="form-group">
          <label for="register-email">Email <span class="red">*</span></label>
          <div class="input-bloc">
            <input v-model="user.email" type="email" name="register-email" required="required" />
          </div>
        </div>
        <div class="form-group">
          <label for="register-password">Mot de passe <span class="red">*</span></label>
          <div class="input-bloc">
            <input v-on:input="checkForm" v-model="user.password" v-bind:type="passType" required="required"/>
            <i v-if="EyePasswordClose" class="far fa-eye-slash icon-password" v-on:click="viewPassword"></i>
            <i v-if="EyePasswordOpen" class="far fa-eye icon-password" v-on:click="hidePassword"></i>
          </div>
          <span class="error"><i>{{ errorsMdp }}</i><br /></span>
        </div>
        <div class="form-group">
          <label for="register-confirm">Confirmation Mot de passe <span class="red">*</span></label>
          <div class="input-bloc">
            <input type="password" v-model="confirm" v-on:input="checkForm" required="required"/>
          </div>
          <span class="error"><i>{{ errorsConfirm }}</i></span>
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
      },
      confirm: undefined,
      validPassword: false,
      validReturn: '',
      errorsMdp: '',
      errorsConfirm: ''
    }
  },

  methods: {
    viewPassword () {
      this.passType = 'text'
      this.EyePasswordClose = false
      this.EyePasswordOpen = true
    },

    hidePassword () {
      this.passType = 'password'
      this.EyePasswordClose = true
      this.EyePasswordOpen = false
    },

    checkForm () {
      this.errorsMdp = ''
      this.errorsConfirm = ''
      if (this.user.password.length < 6) {
        this.errorsMdp = ('Le mot de passe doit être compris entre 6 et 64 caractères')
      } else if (this.confirm !== this.user.password) {
        this.errorsConfirm = ('La confirmation doit être identique au mot de passe')
      } else {
        this.validPassword = true
      }
    },

    submitRegister () {
      if (this.validPassword) {
        axios.post('http://localhost:3000/api/user/register', this.user)
          .then(() => {
            this.validReturn = 'Vous êtes enregistré, vous allez être redirigé...'
            window.setTimeout(function () {
              location.href = 'http://localhost:8080/'
            }, 3000)
          })
      } else {
        this.validReturn = 'Veuillez vérifier vos données, il y a une erreur.'
      }
    }
  }
}
</script>

<style>
  .valide {
    color: green;
  }

  .error, .red {
    color: red;
  }
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
