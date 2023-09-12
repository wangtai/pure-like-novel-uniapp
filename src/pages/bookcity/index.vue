<template>
  <view class="content">
    <div class="nav-bar flex-col"><span class="text_2">书城</span></div>
    <div class="book-list">
      <div class="scroll-wrap">
        <div class="book">
          <div class="book-cover"></div>
          <div class="book-author">刘德华</div>
          <div class="book-title">今天也是你的新娘</div>
        </div>
      </div>
    </div>
    <div class="suggest">
      <div class="suggest-title">
        <div class="left">
          小编推荐
        </div>
        <div class="right" @click="jump">
          全部分类>
        </div>
      </div>
      <div class="suggest-menu">
        <div class="scroll-wrap">
          <div class="suggest-menu-item active">都市言情</div>
          <div class="suggest-menu-item">都市言情</div>
        </div>
      </div>
      <div class="suggest-list">
        <div class="suggest-card">
          <div class="suggest-card-main">
            <div class="suggest-card-cover"></div>
            <div class="suggest-card-info">
              <div class="suggest-card-title">今天也是你的新娘</div>
              <div class="suggest-card-desc">梦回好青年公寓，身边赫然出现的竟然是当年最最怀念的白色纱织礼服，抬眼望…</div>
            </div>
          </div>
          <div class="suggest-footer">
            <div class="suggest-footer-catalog">修仙玄幻</div>
            <div class="suggest-footer-tips">更新至1230章</div>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const title = ref('Hello')
const jump = () => {
  uni.navigateTo({
    url: '/pages/catalog/catalog'
  });
};
</script>

<style lang="less">
@import "bookcity.less";
</style>
