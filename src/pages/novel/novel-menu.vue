<script lang="ts" setup>
import {ref} from "vue";

const props = defineProps<{
  visibility: string,
}>()
const emits = defineEmits(['clickMask', 'popupDir'])

const closeMenu = () => {
  emits('clickMask');
}

const popupDir = () => {
  emits('popupDir');
}
</script>

<template>
  <div ref="menu" :style="'display:'+visibility" class="menu-bg">
    <div class="menu-mask" v-on:click="closeMenu"></div>
    <div class="menu">
      <div class="show-ctrl">
        <div class="font ctrl-wrap">
          <div class="title">字体</div>
          <div class="ctrl">
            <div class="font-size a-minus"></div>
            <div class="font-size-number">16</div>
            <div class="font-size a-plus"></div>
          </div>
        </div>
        <div class="theme ctrl-wrap">
          <div class="title">主题</div>
          <div class="ctrl">
            <div class="theme-color white"></div>
            <div class="theme-color green"></div>
            <div class="theme-color yellow theme-item-active"></div>
            <div class="theme-color black"></div>
          </div>
        </div>
      </div>
      <div class="novel-ctrl">
        <div class="left">上一章</div>
        <div class="center" v-on:click="popupDir">目录</div>
        <div class="right">下一章</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "menu";
</style>