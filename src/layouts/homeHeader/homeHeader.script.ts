import { Component, Mixins, Vue } from "vue-property-decorator";

@Component
class HomeHeaderProps extends Vue {}
@Component
class HomeHeaderData extends Vue {}

@Component
export class HomeHeaderScript extends Mixins(HomeHeaderData, HomeHeaderProps) {}
