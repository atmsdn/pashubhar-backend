export const EMPTY_ROUTE = '/';
export const BASE_URL = '/v1/';

export const BASE_ROUTES = {
    HEALTH_CHECK: `${BASE_URL}healthcheck`,
    AUTH: `${BASE_URL}auth`,
    USERS: `${BASE_URL}users`,
    PUSH_NOTIFICATION: `${BASE_URL}push-notification`
};

export const ROUTES = {
    PING: '/ping',
    TOKEN: '/token',
    OTP_INIT: '/otp/init',
    OTP_VERIFY: '/otp/verify',
    TOKEN_REFRESH: '/token/refresh',
    CREATE_USER: '/create-user',
    GET_CURRENT_USER: '/get-current-user',
    GET_CONSTANT_VALUES: '/get-value',
    CALCULATE_CONSTANT_VALUES: '/calculate-value'
};
