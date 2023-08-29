<template>
  <view class="content">
    <div class="suggest-menu">
      <div class="scroll-wrap">
        <div class="suggest-menu-item active">都市言情</div>
        <div class="suggest-menu-item">都市言情</div>
      </div>
    </div>
    <div class="book-list">
      <div class="book">
        <div class="cover"></div>
        <div class="title">123</div>
        <div class="tips">123</div>
      </div>

      <div class="book">
        <div class="cover"></div>
        <div class="title">123</div>
        <div class="tips">123</div>
      </div>

      <div class="book">
        <div class="cover"></div>
        <div class="title">123</div>
        <div class="tips">123</div>
      </div>

      <div class="book">
        <div class="cover"></div>
        <div class="title">123</div>
        <div class="tips">123</div>
      </div>

      <div class="book">
        <div class="cover"></div>
        <div class="title">123</div>
        <div class="tips">123</div>
      </div>

      <div class="book">
        <div class="cover"></div>
        <div class="title">123</div>
        <div class="tips">123</div>
      </div>

    </div>

  </view>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const title = ref('Hello')
</script>

<style lang="less">
@import "catalog.less";
</style>
