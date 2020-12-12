import {
  Button,
  Card,
  Row,
  Col,
  Tag,
  Form,
  Input,
  ConfigProvider,
  Select,
  DatePicker,
  Dropdown,
  Menu,
  Divider,
  Badge,
  BackTop,
  Carousel
} from "ant-design-vue";
import { VueConstructor } from "vue";

/**
 * @description 手动注册 antd-vue 组件,达到按需加载目的
 * @description Automatically register components under Button, such as Button.Group
 * @param{VueConstructor}
 * @returns void
 */
export default function loadComponent(app: VueConstructor) {
  app.use(Button);
  app.use(Card);
  app.use(Row);
  app.use(Col);
  app.use(Tag);
  app.use(Form);
  app.use(Input);
  app.use(Dropdown);
  app.use(Menu);
  app.use(Divider);
  app.use(ConfigProvider);
  app.use(Select);
  app.use(DatePicker);
  app.use(BackTop);
  app.use(Badge);
  app.use(Carousel);
}
