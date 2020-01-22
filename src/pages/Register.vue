<template>
  <div class="container has-text-centered">
    <div class="column is-4 is-offset-4">
      <h3 class="title has-text-grey">Register</h3>
      <p class="subtitle has-text-grey">Please create an account.</p>
      <div class="box">
        <figure class="avatar">
            <img src="https://placehold.it/128x128">
        </figure>
        <form>
          <div class="field">
            <div class="control">
              <input v-model="form.email"
                     class="input is-large"
                     type="email"
                     placeholder="Your Email"
                     autocomplete="email">
              <div 
                v-if="$v.form.email.$error"
                class="form-error">
                <span 
                  v-if="!$v.form.email.required"
                  class="help is-danger">
                  Email is required
                </span>
                <span 
                  v-if="!$v.form.email.email"
                  class="help is-danger">
                  Email address is not valid
                </span>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input v-model="form.fullName"
                     class="input is-large"
                     type="text"
                     placeholder="Full Name">
              <div 
                v-if="$v.form.fullName.$error"
                class="form-error">
                <span 
                  v-if="!$v.form.fullName.required"
                  class="help is-danger">
                  Full name is required
                </span>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input v-model="form.avatar"
                     class="input is-large"
                     type="text"
                     placeholder="Avatar URL">
              <div 
                v-if="$v.form.avatar.$error"
                class="form-error">
                <span 
                  v-if="!$v.form.avatar.required"
                  class="help is-danger">
                  Avatar is required
                </span>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input v-model="form.password"
                     class="input is-large"
                     type="password"
                     placeholder="Your Password"
                     autocomplete="current-password">
              <div 
                v-if="$v.form.password.$error"
                class="form-error">
                <span 
                  v-if="!$v.form.password.required"
                  class="help is-danger">
                  Password is required
                </span>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input v-model="form.passwordConfirmation"
                     class="input is-large"
                     type="password"
                     placeholder="Password Confirmation">
              <div 
                v-if="$v.form.passwordConfirmation.$error"
                class="form-error">
                <span 
                  v-if="!$v.form.password.sameAsPasword"
                  class="help is-danger">
                  Password doesn't match
                </span>
              </div>
            </div>
          </div>
          <button @click="onRegister"
                  :disabled="this.$v.form.$invalid && $v.form.$dirty"
                  type="button"
                  class="button is-block is-info is-large is-fullwidth">Sign Up</button>
        </form>
      </div>
      <p class="has-text-grey">
        <a>Sign In With Google</a>&nbsp;·&nbsp;
        <router-link to="/login">Sign In</router-link>&nbsp;·&nbsp;
        <a href="../">Need Help?</a>
      </p>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      form: {
        email: '',
        fullName: '',
        avatar: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      fullName: {
        required
      },
      avatar: {
        required
      },
      password: {
        required
      },
      passwordConfirmation: {
        sameAsPasword: sameAs('password')
      }
    }
  },
  methods: {
    onRegister() {
      this.$v.form.$touch()
      if(!this.$v.form.$invalid) {
        this.handleRegister()
      }
    },
    handleRegister() {
      this.$store.dispatch('auth/signUp', this.form)
        .then(async user => {
          await this.$store.dispatch('auth/createUserProfile', {
            uid: user.uid, 
            userProfile: {
              fullName: this.form.fullName,
              avatar: this.form.avatar,
              user: user.uid
            }
          })
          this.$router.push('/')
        }).catch(errorMessage => {
          this.$toasted.error(errorMessage, { duration: 3000 })
        }) 
    }
  }
}
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 5rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  input {
    font-weight: 300;
  }
  p {
    font-weight: 700;
  }
  p.subtitle {
    padding-top: 1rem;
  }
</style>