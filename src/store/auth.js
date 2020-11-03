const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
const SET_LOG_OUT = 'SET_LOG_OUT'
const MODULE_NAME = "auth";
const getAuthToken = () => (state) => state[MODULE_NAME].idToken;
const getAuthStatus = () => (state) => state[MODULE_NAME].status;

const initialState = {
  status: false,
  user: {
    email: "",
    idToken: null,
    localId: null,
  },
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTH_SUCCESS:
      return {
        ...state,
        status: true,
        user: payload,
      };
case SET_LOG_OUT: 
return {
    ...state,
    status: false,
    user : {
        email: '',
        idToken: null, 
        localId: null
    }
}
    default:
      return state;
  }
}
 const SetAuthSuccess = (payload) => ({
     type: SET_AUTH_SUCCESS,
     payload
 })

  