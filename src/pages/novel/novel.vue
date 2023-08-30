<script lang="ts" setup>
import {ref} from "vue";
import NovelDirectory from "@/pages/novel/novel-directory.vue";
import NovelMenu from "@/pages/novel/novel-menu.vue";

uni.setNavigationBarColor({
  frontColor: '#000000',
  backgroundColor: '#FBF0EA',
})
uni.setNavigationBarTitle({
  title: '小说'
})
const menuVisibility = ref<string>('none');
const closeMenu = () => {
  console.log('closeMenu')
  menuVisibility.value = 'none';
}
const popupMenu = () => {
  console.log('popupMenu')
  menuVisibility.value = 'block';
}

const dirVisibility = ref<string>('none')
const closeDir = () => {
  console.log('closeMenu')
  dirVisibility.value = 'none';
}
const popupDir = () => {
  console.log('popupMenu')
  menuVisibility.value = 'none';
  dirVisibility.value = 'flex';
}
</script>

<template>
  <view class="container">
    <div class="scroll-wrap">
      <div class="content">
        众菩萨献毕，因请如来明示根本，指解源流。那如来微开善口，敷演大法，宣扬正果，讲的是三乘妙典，五蕴《楞严》[333]。但见那天龙围绕，花雨缤纷。正是禅心朗照千江月，真性清涵万里天。
        如来讲罢，对众言曰：“我观四大部洲，众生善恶者，各方不一：东胜神洲者，敬天礼地，心爽气平；北俱芦洲者，虽好杀生，只因糊口，性拙情疏，无多作践；我西牛贺洲者，不贪不杀，养气潜灵，虽无上真，人人固寿；但那南赡部洲者，贪淫乐祸，多杀多争，正所谓口舌凶场，是非恶海。我今有三藏真经，可以劝人为善。”诸菩萨闻言，合掌皈依，向佛前问曰：“如来有那三藏真经？”如来曰：“我有《法》一藏，谈天；《论》一藏，说地；《经》一藏，度鬼。三藏共计三十五部，该一万五千一百四十四卷，乃是修真之经，正善之门。我待要送上东土，叵耐那生民愚蠢，毁谤真字体言，不识我法门之旨要，怠慢了瑜迦之正宗。怎么得一个有法力的，去东土寻一个善信，教他苦历千山，询经万水，到我处求取真经，永传东土caidan
        ，劝化众生，却乃是个山大的福缘，海深的善庆。谁肯去走一遭来？”
        当有观音菩萨，行近莲台，礼佛三匝道：“弟子不才，愿上东土，寻一个取经人来也。”诸众抬头观看，那菩萨：”

        摘录来自
        西游记
        吴承恩
        https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewBook?id=0
        此材料可能受版权保护。
      </div>
    </div>
    <div class="footer">
      <div class="left">9:41</div>
      <div class="center" v-on:click="popupMenu">菜单</div>
      <div class="right">
        第七章 第 8/12 页
      </div>
    </div>
    <novel-menu :visibility="menuVisibility" @click-mask="closeMenu" @popup-dir="popupDir"/>
    <novel-directory :visibility="dirVisibility" @close-dir="closeDir"/>
  </view>
</template>

<style lang="less" scoped>
@import "novel";
@import "menu";

</style>