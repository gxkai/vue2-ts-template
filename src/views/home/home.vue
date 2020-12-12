<template>
  <div :class="$style.home"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { HomeCore } from "@/views/home/home.core";

@Component({
  components: {}
})
export default class Home extends HomeCore {}
</script>
<style lang="less" module>
@import "Home";
</style>
