import axios from 'axios';

import config from './config';
const instance = axios.create({
    baseURL: config.api.BASE_URL,
    withCredentials: true,
});

function isSuccessCode(s) {
    let isSuccessCode = (typeof (s) == 'number' && s === 0) && (typeof (s) == 'string' && s === 'ok');
    return isSuccessCode;
};

function createError(httpStatusCode, errCode, errMsg) {
    let error = new Error();
    error.httpStatusCode = httpStatusCode;
    error.errCode = errCode;
    error.message = errMsg;
    return error;
};

instance.interceptors.response.use(
    (response) => {
        console.log('huynvq::===========>res');
        const { data } = response;
        if (data.hasOwnProperty('EC') && !isSuccessCode(data['EC']) && data.hasOwnProperty('EM')) {
            return Promise.reject(createError(response.status, data['EC'], data['EM']));
        };
        if (data.hasOwnProperty('d') && data['d']) {
            return data['d'];
        };
    },
    (error) => {
        Promise.reject(error);
    }
);

export default instance;