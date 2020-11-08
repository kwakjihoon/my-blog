import axios from '/web_modules/axios/dist/axios.js';
import {ENV,BASE_HOST} from '../config/index.js';
const TIME_OUT = 1000 * 5;

/* Common axios */
const commonAxios = axios.create({
    baseURL: BASE_HOST,
    timeout: TIME_OUT,
    headers: {
        "Authorization": ""
        ,'Access-Control-Allow-Origin':"*"
    },
});

/**************************************************************************/
/* Interceptors  */
/**************************************************************************/
/* at request */
commonAxios.interceptors.request.use(
    (config) => {
        if (ENV == 'LOCAL' || ENV == 'DEV') {
            printRequestDebug(config);
        }

        return config;
    },
    (error) => {
        if (ENV == 'LOCAL' || ENV == 'DEV') {
            printErrorDebug(error);
        }

        return Promise.reject(error);
    },
);
/* at response */
commonAxios.interceptors.response.use(
    (response) => {
        if (ENV == 'LOCAL' || ENV == 'DEV') {
            printResponseDebug(response);
        }

        return response;
    },
    (error) => {
        if (ENV == 'LOCAL' || ENV == 'DEV') {
            printErrorDebug(error);
        }

        if (error.response) {
            // 2xx 외 응답일때
        } else if (error.request) {
            // 요청하였으나 응답을 받지 못함
        } else {
            // 그외..

            console.log(12312312312312);
            console.log(12312312312312);
            console.log(12312312312312);
            console.log(12312312312312);



        }
        return Promise.reject(error);
    },
);

/**************************************************************************/
/* Custom Functions  */
/**************************************************************************/
function printErrorDebug(error) {
    console.warn(
        `############### COMMON AXIOS ERROR START ############# [ ${new Date()
            .toLocaleString('en-US')
            .split(', ')} ]`,
    );
    if (error.response) {
        console.warn('(ERR) DATA       : ', error.response.data);
        console.warn('(ERR) STAUTS     : ', error.response.status);
        console.warn('(ERR) HEADERS    : ', error.response.header);
    } else if (error.request) {
        console.warn('(ERR) URL        : ', error.request._url);
        console.warn('(ERR) STATUS     : ', error.request._response);
    } else {
        console.warn('ERROR      : ', error.message);
    }
    console.warn('############### COMMON AXIOS ERROR END ################');
}

function printRequestDebug(config) {
    console.log(
        `############### COMMON AXIOS REQ START ############# [ ${new Date()
            .toLocaleString('en-US')
            .split(', ')} ]`,
    );
    console.log('(REQ) URL           : ', config.url);
    console.log('(REQ) METHOD        : ', config.method);
    console.log('(REQ) HEADERS       : ', config.headers);
    console.log('(REQ) BODY          : ', config.data);
    console.log('############### COMMON AXIOS REQ END ###############');
}

function printResponseDebug(response) {
    console.log(
        `############### COMMON AXIOS RES START ############# [ ${new Date()
            .toLocaleString('en-US')
            .split(', ')} ]`,
    );
    console.log('(RES) URL          : ', response.config.url);
    console.log('(RES) DATA         : ', response.data);
    console.log('(RES) HTTP_STATUS  : ', response.status);
    console.log('############### COMMON AXIOS RES END ###############');
}

export default commonAxios;
