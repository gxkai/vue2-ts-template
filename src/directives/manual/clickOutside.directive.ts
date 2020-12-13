import { VNode } from "vue";
import { DirectiveBinding } from "vue/types/options";

export interface IClickOutsideDirectiveOptions {
  onClick: (args: any, e: MouseEvent) => void;
}
export default class ClickOutsideDirective {
  private readonly options!: IClickOutsideDirectiveOptions;
  constructor(options: IClickOutsideDirectiveOptions) {
    this.options = options;
  }
  public register() {
    const options = this.options;
    return {
      bind(
        el: HTMLElement & { __vueClickOutSize__?: any },
        binding: any,
        vnode: VNode
      ) {
        function documentHandler(e: any) {
          if (!el.contains(e.target)) {
            options.onClick.call(el, binding, e);
          }
        }
        el.__vueClickOutSize__ = documentHandler;

        document.addEventListener("click", documentHandler);
      },
      unbind(
        el: HTMLElement & { __vueClickOutSize__?: any },
        binding: DirectiveBinding
      ) {
        document.removeEventListener("click", el.__vueClickOutSize__);
        delete el.__vueClickOutSize__;
      }
    };
  }
}
