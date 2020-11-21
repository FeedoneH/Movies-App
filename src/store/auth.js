const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
const SET_LOG_OUT = "SET_LOG_OUT";
const SET_ERROR = 'SET_ERROR';
export const MODULE_NAME = "auth";
export const getAuthToken = (state) => state[MODULE_NAME].idToken;
export const getAuthStatus = (state) => state[MODULE_NAME].status;
export const getError = (state) => state[MODULE_NAME].error;
export const getUserData = state => state[MODULE_NAME].user
const initialState = {
  status: false,
  error: '',
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
        user: {
          email: "",
          idToken: null,
          localId: null,
        },
      };
      case SET_ERROR: 
      return {
        ...state,
        error: payload
      }
    default:
      return state;
  }
}
const setAuthSuccess = (payload) => ({
  type: SET_AUTH_SUCCESS,
  payload,
});
const setError =(payload) =>({
  type:  SET_ERROR,
  payload
})
export const signUser = ({ email, password,fullName }, signIn) => async (dispatch) => {
  const API_KEY = "AIzaSyCHSjduCUu1VMkIRjzu01uMsg6Eu8zqE0M";
  let signType = signIn ? "signInWithPassword" : "signUp";
  const domain = `https://identitytoolkit.googleapis.com/v1/accounts:${signType}?key=${API_KEY}`;
  try {
    const response = await fetch(domain, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    });
    const answer = await response.json();
    if(!answer.error){
    const { email, idToken, localId } = answer;
    dispatch(setAuthSuccess({ email, idToken, localId }));
    signType === 'signUp' && await  fetch('https://usersprojects-6d10e.firebaseio.com/users', {
      method: 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({email, password,fullName })
    }) 
  
  }
    else {
      console.log('error occured')
    }
    console.log(answer);
    dispatch(setError(answer?.error?.message))
  } catch (error) {
    console.log(error,'auth');
    
  }
};
