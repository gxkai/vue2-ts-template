import { action } from "@storybook/addon-actions";
import {
  boolean,
  select,
  array,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/vue";
import HomeHeader from "./homeHeader.vue";
storiesOf("HomeHeader", module)
  .addDecorator(withKnobs)
  .add(
    "BasicUsage",
    () => ({
      components: {
        HomeHeader: HomeHeader
      },
      props: {},
      template: `<home-header/>`,
      methods: {
        action: action("clicked")
      },
      description: {
        HomeHeader: {
          props: {}
        }
      }
    }),
    {
      info: {
        summary: "",
        useDocgen: true,
        docsInPanel: true,
        header: true,
        source: true
      }
    }
  );
