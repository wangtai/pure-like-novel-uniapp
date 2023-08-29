<template>
  <view class="content">
    <div class="nav-bar flex-col"><span class="text_2">书架</span></div>
    <div class="promo"></div>
  </view>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const title = ref('Hello')
</script>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  background: #33B4A9;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;

  .nav-bar {
    width: 100vw;
    height: 88rpx;
    background: #33B4A9;
    //background: red;
    margin-top: 44rpx;
    //padding: 0 30rpx;

    .text_2 {
      font-size: 36rpx;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 88rpx;
      margin-left: 30rpx;
    }
  }
  .promo {
    background: #FFFFFF;
    width: 654rpx;
    height: 234rpx;
    margin-top: 30rpx;
    border-radius: 32rpx;
  }
}

</style>
