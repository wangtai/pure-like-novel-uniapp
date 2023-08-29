<template>
  <view class="content">
    <div class="nav-bar flex-col"><span class="text_2">书架</span></div>
    <div class="promo">
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
          <div class="book">
            <div class="book-cover"></div>
            <div class="book-title">今天也是你的新娘</div>
            <div class="book-desc">已读到最新章节</div>
          </div>
          <div class="book">
            <div class="book-cover"></div>
            <div class="book-title">今天也是你的新娘</div>
            <div class="book-desc">已读到最新章节</div>
          </div>
          <div class="book">
            <div class="book-cover"></div>
            <div class="book-title">今天也是你的新娘</div>
            <div class="book-desc">已读到最新章节</div>
          </div>
          <div class="book">
            <div class="book-cover"></div>
            <div class="book-title">今天也是你的新娘</div>
            <div class="book-desc">已读到最新章节</div>
          </div>
          <div class="book">
            <div class="book-cover"></div>
            <div class="book-title">今天也是你的新娘</div>
            <div class="book-desc">已读到最新章节</div>
          </div>
          <div class="book">
            <div class="book-cover"></div>
            <div class="book-title">今天也是你的新娘</div>
            <div class="book-desc">已读到最新章节</div>
          </div>
          <div class="book">
            <div class="book-cover"></div>
            <div class="book-title">今天也是你的新娘</div>
            <div class="book-desc">已读到最新章节</div>
          </div>
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

const title = ref('Hello')
</script>

<style lang="less">
//html, body {margin: 0; height: 100%; overflow: hidden}
.content {
  display: flex;
  flex-direction: column;
  background: #33B4A9;
  height: calc(100vh);
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
    padding: 24rpx;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    justify-items: flex-start;

    .book-cover {
      width: 132rpx;
      height: 186rpx;
      background: #E5E5E5;
      border-radius: 24rpx;
      margin-right: 24rpx;
    }

    .book-info {
      display: flex;
      flex-direction: column;
      //justify-content: space-between;

      .book-title {
        font-size: 28rpx;
        font-weight: 500;
        color: #333333;
        line-height: 40rpx;
        height: 40rpx;
        margin-top: 8rpx;
        margin-bottom: 8rpx;
      }

      .book-author {
        width: 72rpx;
        height: 34rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #33B4A9;
        line-height: 34rpx;
        margin-bottom: 16rpx;
      }

      .book-desc {
        width: 450rpx;
        height: 72rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
        line-height: 36rpx;
      }
    }
  }

  .bookshelf {
    background: #FFFFFF;
    width: 100%;
    //min-height: calc(100vh - 88rpx - 44rpx - 30rpx - 234rpx - 26rpx);
    //height: 50vh;
    margin-top: 30rpx;
    border-top-left-radius: 32rpx;
    border-top-right-radius: 32rpx;

    .bookshelf-content {
      width: calc(100% - 48rpx * 2);
      height: calc(100% - 48rpx * 2);
      margin: 48rpx;

      .bookshelf-title{
        display: flex;
        flex-direction: row;
        //justify-content: space-between;
        align-items: center;
        height: 50rpx;
        margin-bottom: 40rpx;
        .bookshelf-icon {
          width: 48rpx;
          height: 48rpx;
          background-image: url('../../static/bookshelf/bookshelf.svg');
          background-size: 48rpx 48rpx;
          margin-right: 8rpx;
        }
        .bookshelf-text {
          height: 50rpx;
          font-size: 36rpx;
          font-weight: 600;
          color: #333333;
          line-height: 50rpx;
        }
      }
      .books{
        //background: #F5F5F5;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        .book {
          width: 200rpx;
          height: 386rpx;
          //background: #E5E5E5;
          margin-bottom: 48rpx;

          .book-cover{
            width: 200rpx;
            height: 280rpx;
            background: #E5E5E5;
            border-radius: 24rpx;
            margin-bottom: 28rpx;
          }
          .book-title{
            width: 200rpx;
            height: 40rpx;
            font-size: 28rpx;
            font-weight: 500;
            color: #333333;
            line-height: 40rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .book-desc{
            width: 200rpx;
            height: 34rpx;
            font-size: 24rpx;
            font-weight: 400;
            color: #999999;
            line-height: 34rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}

</style>
