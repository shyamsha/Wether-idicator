export interface WetherParams {
  city:string,
  appId:string
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface RootWether {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

export enum WetherActionTypes {
  WETHER_REQUEST = "@@auth/wether/WETHER_REQUEST",
  WETHER_SUCCESS = "@@auth/wether/WETHER_SUCCESS",
  WETHER_ERROR = "@@auth/wether/WETHER_ERROR",

  LOGOUT_REQUEST = "@@auth/logout/LOGOUT_REQUEST",
  LOGOUT_SUCCESS = "@@auth/logout/LOGOUT_SUCCESS",
  LOGOUT_ERROR = "@@auth/logout/LOGOUT_ERROR",
}

export interface WetherState {
  readonly loading: boolean;
  readonly wether:RootWether | null;
  readonly errors: {
    error:undefined
  };
}
