console.log(`Main app JS file`);

import Vue from "vue";
import babelPolyfill from 'babel-polyfill';
import App from './components/App';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
    // router,
    store,
    render: h => h(App),
}).$mount('#app');