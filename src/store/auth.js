const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
const SET_LOG_OUT = "SET_LOG_OUT";
export const MODULE_NAME = "auth";
const getAuthToken = () => (state) => state[MODULE_NAME].idToken;
export const getAuthStatus = () => (state) => state[MODULE_NAME].status;

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
        user: {
          email: "",
          idToken: null,
          localId: null,
        },
      };
    default:
      return state;
  }
}
const SetAuthSuccess = (payload) => ({
  type: SET_AUTH_SUCCESS,
  payload,
});

export const signUser = ({ email, password }, signIn) => async (dispatch) => {
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
    dispatch(SetAuthSuccess({ email, idToken, localId }));}
    else {
      console.log('error occured')
    }
    console.log(answer);
  } catch (error) {
    console.log(error,'auth');
  }
};
