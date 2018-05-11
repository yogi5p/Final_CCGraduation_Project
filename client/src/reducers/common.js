const initalState = {
  amenities: [],
  favoriteParks: [],
  favoriteVets: [],
  zipCode: "",
  amenitySelected: "",
  //userAuthenticated: false,
  user: null,
  token: null
};

export const common = (state = initalState, action) => {
  switch (action.type) {
    case "EVENTS":
      return {
        ...state,
        amenities: action.payload.results.filter(a => a.poster_path),
        inProgress: false
      };
    case "PARKS":
      return {
        ...state,
        favoriteParks: action.payload.amenities,
        inProgress: false
      };
    case "VETS":
      return {
        ...state,
        favoriteVets: action.payload.amenities,
        inProgress: false
      };
    case "GROOMING":
      return {
        ...state,
        favoriteVets: action.payload.amenities,
        inProgress: false
      };
    case "HOTELS":
      return {
        ...state,
        //   user: action.payload.user,
        //   token: action.payload.user.token,
        //   isAuthenticated: action.payload.user ? true : false,
        inProgress: false,
        redirect: "/"
      };
    case "SET_SEARCH_ZIPCODE":
      return {
        ...state,
        zipCode: action.payload
      };
    case "SET_AMENITY_SELECTED":
      return {
        ...state,
        amenitySelected: action.payload
      };
    case "ASYNC_START":
      return {
        ...state,
        inProgress: true
      };
    case "REDIRECT":
      return {
        ...state,
        redirect: action.payload
      };
    default:
      return state;
  }
};

export default common;
