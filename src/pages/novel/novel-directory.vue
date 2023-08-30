<script lang="ts" setup>
const props = defineProps<{
  visibility: string
}>();
const emits = defineEmits(['closeDir']);
const closeDir = () => {
  emits('closeDir');
}
</script>

<template>
  <div :style="'display:'+visibility" class="directory-bg">
    <div class="directory-mask" v-on:click="closeDir"></div>
    <div class="directory">
      <div class="title">西游记</div>
      <div class="chapters">
        <div class="chapter">扉页</div>
        <div class="chapter">第二回 悟彻菩提真妙理 断魔归本合元神</div>
        <div class="chapter">第一回 灵根育孕源流出 心性修持大道生第八回 我佛造经传极乐 观音奉旨上长安...第一回 灵根育孕源流出
          心性修持大道生第八回 我佛造经传极乐 观音奉旨上长安...
        </div>
        <div class="chapter active">第二回 悟彻菩提真妙理 断魔归本合元神</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "directory";
</style>