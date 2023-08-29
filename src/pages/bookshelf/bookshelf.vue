<template>
  <view class="content">
    <div class="nav-bar flex-col"><span class="text_2">书架</span></div>
    <div class="promo" v-on:click="goToBook">
      <div class="book-cover">

      </div>
      <div class="book-info">
        <div class="book-title">今天也是你的新娘</div>
        <div class="book-author">刘青松</div>
        <div class="book-desc">梦回好青年公寓，身边赫然出现的竟然是当年最最怀念的白色纱织礼服，抬眼望…</div>

      </div>
    </div>
    <div class="bookshelf">
      <div class="bookshelf-content">
        <div class="bookshelf-title">
          <div class="bookshelf-icon"></div>
          <div class="bookshelf-text">我的书架</div>
        </div>
        <div class="books">
          <div class="book">
            <div class="book-cover"></div>
            <div class="book-title">今天也是你的新娘</div>
            <div class="book-desc">已读到最新章节</div>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {goToBook} from "@/static/ts/common";

const title = ref('Hello')
</script>

<style lang="less">
@import "bookshelf";
</style>
