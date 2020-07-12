import { WetherState, WetherActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: WetherState = {
  loading: false,
  wether:null,
  errors: {
    error:undefined
  }
};

type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<WetherState, A> = (
  state: WetherState = initialState,
  action: A
) => {
  switch (action.type) {
    case WetherActionTypes.WETHER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, error: undefined }
      };
    case WetherActionTypes.WETHER_SUCCESS:
      return {...state,loading:false, wether:action.payload};
    case WetherActionTypes.WETHER_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, error: action.payload }
      };

    default:
      return state;
  }
};

export { initialState as wetherInitialState, reducer as wetherReducer };
