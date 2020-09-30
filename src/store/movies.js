const SET_MOVIES = "GET_MOVIES";

const initialState = {
  movies: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: payload,
      };

    default:
      return state;
  }
}

const SETMOVIES = (payload) =>({
    type: SET_MOVIES,
    payload
})

export const GetMovies = () => (dispatch)=>{
    const link = "http://www.omdbapi.com/?s=night&apikey=796ba183";
    const res = await fetch(link);
    const data = await res.json()
    dispatch(SETMOVIES(data.Search))
}