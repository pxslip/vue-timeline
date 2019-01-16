import VueAgile from 'vue-agile/src/index';
import VueTimeline from './components/Timeline';

export default function install(Vue) {
  Vue.use(VueAgile);
  Vue.component('vue-timeline', VueTimeline);
}
