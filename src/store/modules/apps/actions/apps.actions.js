import axios from 'axios';
import { SET_APS } from '../mutations/apps.mutations';
import CONFIG from '@src/config/config';

export const FETCH_APPS = 'fetchApps';

export default {
    [FETCH_APPS]({ commit }) {
        return axios
            .get(`${CONFIG.NETWORK.SERVER_IP}/applications`)
            .then(({ data: { release, developer }}) => {
                commit(SET_APS, release);
            })
            .catch(error => {
                console.log(`error`, error);
            });
    }
}