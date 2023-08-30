<script lang="ts" setup>
import {onLaunch, onShow, onHide} from "@dcloudio/uni-app";

onLaunch(() => {
  console.log("App Launch");
  uni.reLaunch({
    url: '/pages/index/index'
  });
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="less">
html body {
  font-family: PingFangSC-Regular, PingFang SC, serif;
}

.uni-tabbar {
  //border-top: 1rpx solid rgba(0, 0, 0, 0.12);
  //box-shadow: 0 0 16rpx 0 rgba(0, 0, 0, 0.12);
  //border-radius: 48rpx 48rpx 0 0;
  //
  .uni-tabbar-border {
    //display: none;
    border: 1rpx solid #e5e5e5;
    border-radius: 48rpx 48rpx 0 0;
    background: #ffffff;
  }
}
</style>
