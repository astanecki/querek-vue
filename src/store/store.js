import Vue from 'vue';
import Vuex from 'vuex';

import apps from './modules/apps/store';
import appCard from './modules/appCard/store';
import emptyCard from './modules/emptyCard/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        apps,
        emptyCard,
        appCard
    },
});
