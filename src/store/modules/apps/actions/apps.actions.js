export const FETCH_APPS = 'fetchApps';
import { SET_APS } from '../mutations/apps.mutations';

export default {
    [FETCH_APPS]({ commit }) {
        console.log(`fetch apps`);

        commit(SET_APS, [
            {
                id: 1,
                name: 'aaa'
            }, {
                id: 2,
                name: 'bbb'
            }
        ]);
    }
}