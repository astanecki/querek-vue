import axios from 'axios';
import { SET_APPS, SET_FILTERED_APPS } from '../mutations/apps.mutations';
import CONFIG from '@src/config/config';

export const FETCH_APPS = 'fetchApps';

export const FIND_APP = 'findApp';

export default {
    [FETCH_APPS]({ commit }) {
        return axios
            .get(`${CONFIG.NETWORK.SERVER_IP}/applications`)
            .then(({ data: { release, developer }}) => {
                commit(SET_APPS, release);
            })
            .catch(error => {
                console.log(`error`, error);
            });
    },

    [FIND_APP]({ commit, state: { apps } }, name) {
        commit(
            SET_FILTERED_APPS,
            apps.filter(app => app.title.indexOf(name) > -1)
        );
    }
}