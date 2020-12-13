<template>
  <div :class="$style.homeHeader" role="homeHeader"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { HomeHeaderScript } from "./homeHeader.script";

@Component({
  components: {}
})
export default class HomeHeader extends HomeHeaderScript {}
</script>
<style lang="less" module>
@import "homeHeader";
</style>
