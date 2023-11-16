export const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
export const IS_RESPONSE_ENCRYPTED = process.env.REACT_APP_SERVER_ENV == 'aws_lambda';
export const DASHBOARD_API = "DASHBOARD_API";
export const GITHUB_AUTH_URL = `${SERVER_BASE_URL}/auth/githubAuthUrl`;
