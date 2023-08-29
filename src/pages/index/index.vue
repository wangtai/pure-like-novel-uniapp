<template>
  <div class="page flex-col" v-on:click="jump">
    <div class="box_1 flex-col">
      <img
          class="image_1"
          referrerpolicy="no-referrer"
          src="../../static/img/index/logo.png"
      />
      <div class="image-text_1 flex-row justify-between">
        <div class="section_1 flex-col"></div>
        <div class="text-group_1 flex-col">
          <span class="text_1">纯喜小说</span>
          <span class="text_2">让小说慢慢发热发光</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'

const jump = () => {
  uni.reLaunch({
    url: '/pages/bookshelf/bookshelf'
  });
};
setTimeout(() => {
  uni.reLaunch({
    url: '/pages/bookshelf/bookshelf'
  });
}, 1000)
</script>

<style lang="less">
@import "src/static/style/common.less";
@import "index.less";
</style>
