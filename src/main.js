import Vue from 'vue';
import VueTimeline from './vue-timeline';
import App from './components/App';

Vue.use(VueTimeline);

new Vue({
  el: '#app',
  render: h => h(App),
});
