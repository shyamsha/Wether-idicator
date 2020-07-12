import { action } from "typesafe-actions";
import { WetherActionTypes, RootWether, WetherParams } from "./types";

export const wetherRequest = (params:WetherParams) =>
action(WetherActionTypes.WETHER_REQUEST,params);
export const wetherSuccess = (res: RootWether) =>
action(WetherActionTypes.WETHER_SUCCESS, res);
export const wetherError = (message: Error) =>
action(WetherActionTypes.WETHER_ERROR, message);
