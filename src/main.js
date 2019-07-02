console.log(`Main app JS file`);

import Vue from "vue";
import babelPolyfill from 'babel-polyfill';
import App from './components/App';

new Vue({
    // router,
    // store,
    render: h => h(App),
}).$mount('#app');