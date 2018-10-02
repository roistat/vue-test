import Vue from 'vue';
import App from './App.vue';
import 'minireset.css';
import './fonts.css';

const emit = Vue.prototype.$emit;
Vue.prototype.$emit = function() {
  const componentTag = this.$vnode.componentOptions.tag;
  // eslint-disable-next-line no-console
  console.log('@event ' + componentTag + ' -> ' + arguments[0], Array.from(arguments).slice(1));
  emit.apply(this, arguments);
};

new Vue({
  el: '#app',
  render: h => h(App),
});
