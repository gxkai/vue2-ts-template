// 首字母大写
Vue.filter('parseTitle', (title: string) => {
  return `${title?.charAt(0)?.toUpperCase() ?? ''}${title?.slice(1) ?? ''}`;
});
