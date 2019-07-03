export const SET_APS = 'setApps';

export default {
    /**
     * @function
     * @param {Object} state
     * @param {Array} apps
     */
    [SET_APS](state, apps) {
        state.apps = apps;
    }
}