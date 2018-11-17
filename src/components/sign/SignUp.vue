<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form v-model="isValid" lazy-validation>
          <v-text-field
            v-model="username"
            append-icon="person"
            label="Username"
            :rules="validName"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            append-icon="email"
            label="Email"
            :rules="validEmail"
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
          <v-text-field
            v-model="pwdConfirm"
            append-icon="lock_open"
            label="Confirm Password"
            type="password"
            :rules="validPwdConfirm"
            required
          ></v-text-field>
          <v-btn
            block
            color="info"
            :disabled="!isValid"
            @click="signup"
          >
            Sign Up
            <v-icon right dark small>chevron_right</v-icon>
          </v-btn>
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
import { validName, validEmail, validPassword } from './helper'

@Component({
  name: 'sign-up'
})
export default class SignUp extends Vue {
  showSnack: boolean = false
  isValid: boolean = false
  username: string = ''
  email: string = ''
  password: string = ''
  pwdConfirm: string = ''

  validName = [ (name: string) => {
    return validName(name) || 'Username has length of 6 at least'
  }
    // a promise of check this name has been register?
    // use throttle
  ]
  validEmail = [ (email: string) => {
    return validEmail(email) || 'Invalid email format'
  } // a promise of check this email has been register?
    // use throttle
  ]
  validPwd = [ (password: string) => {
    return validPassword(password) || 'Password need to be at leat 9 characters, include all types of numbers, letters and special chars'
  } ]
  validPwdConfirm = [ (confirm: string) => {
    // return confirm === this.password || 'Passwords Not Identical'
    return true
  } ]

  signup () {
    if (this.pwdConfirm !== this.password) {
      // show error text
      alert('')
    }
  }
}
</script>
