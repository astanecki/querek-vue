export const SET_APPS = 'setApps';

export const SET_FILTERED_APPS = 'setFilteredApps';

export default {
    /**
     * @function
     * @param {Object} state
     * @param {Array} apps
     */
    [SET_APPS](state, apps) {
        state.apps = apps;
    },

    [SET_FILTERED_APPS](state, apps) {
        state.filteredApps = apps;
    },
}