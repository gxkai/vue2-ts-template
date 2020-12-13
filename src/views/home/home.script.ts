import { Component, Mixins, Vue } from "vue-property-decorator";

@Component
class HomeProps extends Vue {}
@Component
class HomeData extends Vue {}

@Component
export class HomeScript extends Mixins(HomeData, HomeProps) {}
