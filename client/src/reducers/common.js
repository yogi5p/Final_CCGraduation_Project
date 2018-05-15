const initalState = {
  amenities: [],
  zipCode: "",
  amenitySelected: "",
  //userAuthenticated: false,
  user: null,
  token: null
};

export const common = (state = initalState, action) => {
  switch (action.type) {
    case "EVENTS":
      console.log(action.payload.items);
      return {
        ...state,
        amenities: action.payload.items,
        inProgress: false
      };
    case "PARKS":
      console.log(action.payload.items);
      return {
        ...state,
        amenities: action.payload.items,
        inProgress: false
      };
    case "STORES":
      return {
        ...state,
        amenities: action.payload.items,
        inProgress: false
      };
    case "VETS":
      return {
        ...state,
        amenities: action.payload.items,
        inProgress: false
      };
    case "GROOMING":
      return {
        ...state,
        amenities: action.payload.items,
        inProgress: false
      };
    case "HOTELS":
      return {
        ...state,
        amenities: action.payload.items.filter(a => a.title),
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
