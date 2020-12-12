<template>
  <div :class="`${prefix}-{{dashCase fileName}}`">
    {{dashCase fileName}}
  </div>
</template>

<script lang="ts">
import {Prop, Component, Mixins} from "vue-property-decorator";
import GlobalMixin from "@/components/mixins/global.mixin";
@Component({
  name: `{{dashCase fileName}}`
})
export default class {{properCase fileName}} extends Mixins(GlobalMixin) {}
</script>

<style lang="scss">
@import "{{camelCase fileName}}.scss";
</style>
