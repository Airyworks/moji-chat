<template>
  <v-container class="container" fill-height fluid align-start>
    <v-layout row>

      <v-flex xs8 grow offset-xs1 d-flex>
        <v-layout column wrap>
          <v-flex px-3 xs1>
            <div class="rd center block">
              <div class="content al-left channel-title">
                <v-icon large>home</v-icon>
                <span>{{channelName}}</span>
              </div>
            </div>
          </v-flex>
          <v-flex xs10>
            <v-layout fill-height row wrap>
              <v-flex v-for="(v, i) in users" v-bind:key="i" pa-3 xs3>
                <div class="rd center block">
                  <v-layout column wrap fill-height>
                    <v-flex class="content al-center" style="font-size:128px; text-align:center" xs8>{{v.faceUrl}}</v-flex>
                    <v-flex xs2></v-flex>
                    <v-flex class="content al-center" tag="span" xs2>{{v.name}}</v-flex>
                  </v-layout>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs2 d-flex>
        <v-layout column>
          <v-flex px-3 xs1>
            <div class="rd block center back" v-ripple flat>
              <v-icon class="content al-center" large>keyboard_arrow_left</v-icon>
            </div>
          </v-flex>
          <v-flex px-3 py-3 xs7 style="overflow: hidden">
            <div class="rd block logs">
              <div v-for="i in shownLogs" :key="i.id">
                <p class="log-name">{{i.name + ':'}}</p>
                <p class="log-content">{{i.content}}</p>
              </div>
            </div>
          </v-flex>
          <v-flex px-3 pb-3 xs3>
            <div class="rd block">
              hnfhgnejld
            </div>
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
  name: 'channel'
})
export default class Channel extends Vue {
  channelName = 'MapleStory free talk'
  users = [
    { id: 1, name: 'User A', faceUrl: '😀' },
    { id: 2, name: 'User B', faceUrl: '😂' },
    { id: 3, name: 'User C', faceUrl: '😘' },
    { id: 4, name: 'User D', faceUrl: '😋' },
    { id: 5, name: 'User E', faceUrl: '😝' },
    { id: 6, name: 'User F', faceUrl: '😭' },
    { id: 7, name: 'User G', faceUrl: '😤' },
    { id: 8, name: 'User H', faceUrl: '😴' }
  ]
  logs = [
    { id: 12345, uid: 1, content: 'welcome to here', ts: '2018-09-30 00:31:25' },
    { id: 12675, uid: 1, content: 'u can talk anything here!', ts: '2018-09-30 00:31:31' },
    { id: 13698, uid: 3, content: 'hi~', ts: '2018-09-30 00:36:05' },
    { id: 16124, uid: 8, content: 'i\'m new here 😘', ts: '2018-10-01 00:31:25' },
    { id: 19102, uid: 3, content: 'nice to meet u', ts: '2018-10-02 00:31:25' },
    { id: 20102, uid: 3, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' },
    { id: 21102, uid: 5, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' },
    { id: 42102, uid: 2, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' },
    { id: 13102, uid: 8, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' },
    { id: 15102, uid: 1, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' },
    { id: 15102, uid: 4, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' },
    { id: 15102, uid: 6, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' },
    { id: 15102, uid: 7, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' },
    { id: 15102, uid: 2, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' },
    { id: 15102, uid: 5, content: 'the essence of human is repeater', ts: '2018-10-02 00:31:25' }
  ]
  get shownLogs () {
    return this.logs.map(log => {
      const shown = Object.assign({name: ''}, log)
      const user = this.users.find(i => i.id === log.uid)
      shown.name = user !== undefined ? user.name : 'Anonymous'
      return shown
    })
  }
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

.back
  &:hover
    cursor pointer

.channel-title
  line-height 36px
  &>span
    margin-left 20px
    font-size 20px

p               // scoped
  margin-bottom 0

.logs
  overflow scroll

.log-name
  margin-top 10px

.log-content
  text-indent 1em
</style>
