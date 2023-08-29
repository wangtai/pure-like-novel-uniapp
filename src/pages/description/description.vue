<template>
  <view class="content">
    <div class="top">

      <div class="cover"></div>
      <div class="title">西游记</div>
      <div class="author">吴承恩</div>
    </div>
    <div class="desc">
      <div class="title">
        简介
      </div>
      <div class="content">
        梦回好青年公寓，身边赫然出现的竟然是当年最最怀念的白色纱织礼服，抬眼望…梦回好青年公寓，身边赫然出现的竟然是当年最最怀念的白色纱织礼服，抬眼望…梦回好青年公寓，身边赫然出现的竟然是当年最最怀念的白色纱织礼服，抬梦回好青年公寓，身边赫然出现的竟眼望…
      </div>
    </div>
    <div class="menu">
      <div class="left">
        <div class="title">目录</div>
        <div class="tips">已完结</div>
        <div class="tips">共 124 章</div>
      </div>
      <div class="right">></div>
    </div>
    <div class="start-btn" v-on:click="goToNovel">开始阅读</div>
  </view>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {goToNovel} from "@/static/ts/common";

const title = ref('Hello')
</script>

<style lang="less">
@import "description";
</style>
