<template>
  <div :class="$style.home" role="home"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { HomeScript } from "@/views/home/home.script";

@Component({
  components: {}
})
export default class Home extends HomeScript {}
</script>
<style lang="less" module>
@import "Home";
</style>
