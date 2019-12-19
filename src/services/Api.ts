import config from "../config/app";

const isProd: boolean = config.isProd;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;
