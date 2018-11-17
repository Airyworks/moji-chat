<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form v-model="isValid" lazy-validation>
          <v-text-field
            v-model="username"
            append-icon="person"
            label="Username | Email"
            :rules="validName"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            append-icon="lock"
            label="Password"
            type="password"
            :rules="validPwd"
            required
          ></v-text-field>
          <v-layout row wrap>
            <v-flex xs6 class="pr-1">
              <v-btn
                block
                color="info"
                :disabled="!isValid"
                @click="signin"
              >
                Join chat!
                <v-icon right dark small>chevron_right</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs6 class="pl-1">
              <v-btn
                color="success"
                block
                @click="signup"
              >
                Sign up for free!
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <a @click="forgetPwd"
                class="forget-tip">
                Forget password?
              </a>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
    
    <v-snackbar
      v-model="showSnack"
      color="error"
      top
      :timeout="2000"
    >
    Invalid Password
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { validName, validEmail } from './helper'

@Component({
  name: 'sign-in'
})
export default class SignIn extends Vue {
  username: string = ''
  password: string = ''
  isValid: boolean = false
  isEmail: boolean = false
  validName = [
    (name: string) => !!name || 'Username or email required',
    (name: string) => {
      // name could be username(at least 6 chars) or email
      return validName(name) || validEmail(name) || 'Username has length of 6 at least; Or email format syntax error'
    }
  ]
  validPwd = [ (v:string) => !!v || 'Password required' ]
  showSnack: boolean = false

  signin () :void {
    console.log(this.isValid)
    if (!this.username || !this.password) {
      return
    }
    if (validEmail(this.username)) {
      this.isEmail = true
    } else {
      this.isEmail = false
    }
    console.log(this.username, this.password)
  }

  signup (): void {
    this.$router.push({ name: 'SignUp' })
  }

  forgetPwd (): void {
    console.log(11)
    window.setInterval(() => {
      this.showSnack = true
    }, 3000)
  }
}
</script>

<style scoped lang="stylus">
.forget-tip
  font-size 12px
</style>

