declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// 类型声明
declare module "vue/types/vue" {
  interface Vue {
    $style: {
      [key: string]: string;
    };
  }
}

declare global {
  interface Window {}
}
