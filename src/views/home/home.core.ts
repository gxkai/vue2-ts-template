import { Component, Mixins, Vue } from "vue-property-decorator";

@Component
class HomeProps extends Vue {}
@Component
class HomeData extends Vue {}

@Component
export class HomeCore extends Mixins(HomeData, HomeProps) {}
