// itemNo格式化
Vue.filter('parseCode', (code: string) => code?.replace(/(\d{3})/g, '$1.'));
