import Vue from './vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incremento(num) {
      this.counter += num;
    },
  },
});
// Рекомендуется использовать МЕТОД в качестве обработчика события
