import axios from "axios";

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR_VALUE = "ADD_ERROR_VALUE";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_LOADING });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_FAILED, payload: err });
      });
  };
};

export const fetchLoading = () => {
  return { type: FETCH_LOADING, payload: "Smurfs are loading..." };
};

export const fetchSuccess = (smurfs) => {
  return { type: FETCH_SUCCESS, payload: smurfs };
};

export const fetchFailed = (error) => {
  return { type: FETCH_FAILED, payload: error };
};

export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
};

export const addErrorValue = (errorValue) => {
  return { type: ADD_ERROR_VALUE, payload: errorValue };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
