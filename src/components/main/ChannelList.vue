<template>
  <v-container class="container" fill-height fluid align-start>
    <v-layout row>

      <v-flex xs8 grow offset-xs1 d-flex>
        <v-layout column>
          <v-flex xs1>
            <v-layout row fill-height>
              <v-flex xs2 px-3>
                <div class="rd block center add" v-ripple flat>
                  <v-icon class="content al-center" large>add</v-icon>
                </div>
              </v-flex>
              <v-flex xs10 px-3>
                <div class="rd center block">
                  <div class="content al-left channel-title">
                    <span>room id / name</span>
                  </div>
                  <!-- <v-icon large @click="search">search</v-icon> -->
                  <v-btn flat large @click="search()" icon color="#777">
                    <v-icon>search</v-icon>
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs10 px-3 class="ch-list" style="overflow: scroll">
            <!-- <v-layout column fill-height style="overflow: scroll">
              <v-flex fluid my-3 class="rd"></v-flex>
            </v-layout> -->
            <v-flex v-for="(v, i) in channels" v-bind:key="i" fluid my-3 class="rd channel">
              <div class="channel-info" style="display:flex; flex: 1 0 auto; justify-content: center">
                <span>{{v.name}}</span>
                <span>{{v.userCount}} / {{v.total}}</span>
              </div>
              <div class="channel-action">
                <span v-if="v.public">
                  <v-btn flat large @click="join(v.id)" icon color="#777"><v-icon>add</v-icon></v-btn>
                </span>
                <span v-else>
                  <v-btn flat large @click="join(v.id)" icon color="#777"><v-icon>lock</v-icon></v-btn>
                </span>
              </div>
              <v-spacer style="clear: both"></v-spacer>
            </v-flex>
            <v-divider></v-divider>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs2 d-flex>
        <v-layout column>
          <v-flex xs6 class="rd block">
            <v-flex xs12 class="user-info" style="text-align: center">
              <span>{{username}}</span>
            </v-flex>
            <v-flex xs12>
              <v-icon class="content al-center" style="font-size: 140px; line-height: 140px; height: 240px">{{faceUrl}}</v-icon>
            </v-flex>
            <v-flex xs12>
              <div class="content al-center">
                <v-btn flat large icon color="#777">
                  <v-icon>swap_horiz</v-icon>
                </v-btn>
                <v-btn flat large icon color="#777">
                  <v-icon>build</v-icon>
                </v-btn>
              </div>
            </v-flex>
            <v-flex xs12 px-5 pt-3 class="user-info">
              <span class="info-left">level</span>
              <span class="info-right">{{level}}</span>
            </v-flex>
            <v-spacer style="clear: both"></v-spacer>
            <v-flex xs12 px-5 class="user-info">
              <span class="info-left">chatting time</span>
              <span class="info-right">{{chatTime}}</span>
            </v-flex>
            <v-spacer style="clear: both"></v-spacer>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'channel-list'
})
export default class ChannelList extends Vue {
  search () {
    console.log('search')
  }
  join (id: number) {
    console.log(id)
  }
  username: string = 'username'
  faceUrl: string = '😀'
  level: number = 99
  chatTime: number = 287.40
  channels = [
    { id: 1, name: 'Maple story free talk', admin: 'Admin888', userCount: 7, total: 8, public: true },
    { id: 2, name: 'Maple story free talk', admin: 'Vector_W', userCount: 7, total: 8, public: false },
    { id: 3, name: 'Maple story free talk', admin: 'Admin_123', userCount: 7, total: 8, public: true },
    { id: 4, name: 'Maple story free talk', admin: 'JackS', userCount: 7, total: 8, public: false },
    { id: 5, name: 'Maple story free talk', admin: 'Admin999', userCount: 7, total: 8, public: false },
    { id: 6, name: 'Maple story free talk', admin: 'Saiko', userCount: 7, total: 8, public: true },
    { id: 7, name: 'Maple story free talk', admin: 'TBGCore', userCount: 7, total: 8, public: true },
    { id: 8, name: 'Maple story free talk', admin: '__NOTICE__', userCount: 7, total: 8, public: true },
    { id: 9, name: 'Maple story free talk', admin: 'P_P', userCount: 7, total: 8, public: true },
    { id: 10, name: 'Maple story free talk', admin: 'Zzzzzz', userCount: 7, total: 8, public: false },
    { id: 11, name: 'Maple story free talk', admin: 'Admin877', userCount: 7, total: 8, public: true },
    { id: 12, name: 'Maple story free talk', admin: 'PanzQAQ', userCount: 7, total: 8, public: false },
  ]
}
</script>

<style lang="stylus" scoped>
@import "../ui/RoundDiv"

.rd
  @extend .mjch-rd

.container
  min-width 800px
  position fixed
  background url(../../assets/images/room.png)
  background-position 0px -10px
  background-size cover
  background-repeat no-repeat
  overflow hidden
  padding-top 80px

.block
  width 100%
  height 100%
  user-select none
  flex-shrink 1

.center
  align-items center
  flex 0 0 auto
  vertical-align middle
  display inline-flex

.content
  flex 1 0 auto
  display flex
  color #585858
  &.al-center
    justify-content center
  &.al-left           // see https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content
    justify-content left
  &.al-right
    justify-content right
  &.al-baseline
    justify-content baseline

.add
  &:hover
    cursor pointer

.channel-title
  line-height 36px
  &>span
    margin-left 20px
    font-size 20px

.user-info
  &> span
    font-size 18px

.info-left
  float left

.info-right
  float right

.ch-list
  overflow-x hidden
  overflow-y scroll
  &::-webkit-scrollbar
    display none
  -ms-overflow-style none

.channel
  display block
  height 16%

.channel-info
  float left

.channel-action
  float right
  height 100%
  text-align center
  display flex
  flex 1 0 auto
  justify-content center
</style>
