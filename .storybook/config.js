import {addDecorator, configure} from '@storybook/vue'
import './global.scss'
import '../src/share'
import {addParameters} from "@storybook/vue";
import { themes, create } from '@storybook/theming';
// https://github.com/pocka/storybook-addon-vue-info
import { withInfo } from 'storybook-addon-vue-info'
addDecorator(withInfo)
addParameters({
  //配置背景色选项
  backgrounds: [{
    name: '#ffffff',
    value: '#ffffff',
    default: true
  },
    {
      name: '#fefefe',
      value: '#fefefe'
    },
    {
      name: '#111111',
      value: '#111111'
    }
  ],
  //自定义视图大小
  viewport: {
    viewports: {
      PC: {
        name: 'PC',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
      Pad: {
        name: 'Pad',
        styles: {
          width: '1080px',
          height: '810px',
        },
      },
      Phone: {
        name: 'Phone',
        styles: {
          width: '375px',
          height: '812px',
        },
      }
    },
    defaultViewport: '',
  },
  assets: ['https://via.placeholder.com/300/09f/fff.png'],
  options: {
    showPanel: true,
        panelPosition: 'right',
        theme: themes.light,
  }
});
function loadStories () {
  const req = require.context('../src/components', true, /\.stories\.(t|j)s$/)
  req.keys().forEach((filename)=>req(filename))
}

configure(loadStories, module)
