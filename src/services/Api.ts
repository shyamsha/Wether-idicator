import { WetherParams } from './../containers/Wether/types';
import config from "../config/app";
import requestConfig from "../config/request";
import * as API from "../utils/api-helper";

const isProd: boolean = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

  export const login = (params: {}) => {
    const url = `${API_ENDPOINT}/login`;
    const config = { ...requestConfig };

    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    };

    return API.post(url, params, config);
  };

  export const logout = () => {
    const url = `${API_ENDPOINT}/logout`;
    return API.get(url);
  };

  export const testWether = (params:WetherParams) => {
    const url =`${API_ENDPOINT}/weather?q=${params.city}&APPID=${params.appId}`;
    return API.get(url)
  }
