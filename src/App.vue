<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'app'
})
export default class App extends Vue {}
</script>

<style lang="stylus">
@font-face
  font-family STXIHEI
  src url(assets/fonts/STXIHEI.ttf)
  font-weight normal
  font-style normal

body
  &::-webkit-scrollbar
    display none
  -ms-overflow-style none

span, p
  font-family STXIHEI, Arial, Helvetica, sans-serif
</style>

