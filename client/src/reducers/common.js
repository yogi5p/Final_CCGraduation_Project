const initalState = {
  amenities: [],
  zipCode: "",
  amenitySelected: "",
  userAuthenticated: false,
  user: null,
  token: null,
  username: "Yogi",
  useremail: "yogitap@gmail.com",
  password: "",
  blogCategory: "Product",
  blogtext: "",
  blogList: [],
  blogid: 0
};

export const common = (state = initalState, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.user.token,
        userAuthenticated: action.payload.user ? true : false,
        inProgress: false,
        redirect: "/Amenities"
      };
    case "EVENTS":
      return {
        ...state,
        amenities: action.payload.items,
        inProgress: false
      };
    case "PARKS":
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
    case "GROOMERS":
      return {
        ...state,
        amenities: action.payload.items,
        inProgress: false
      };
    case "HOTELS":
      return {
        ...state,
        amenities: action.payload.items,
        inProgress: false
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
    case "SET_BLOG_CATEGORY":
      return {
        ...state,
        blogCategory: action.payload
      };
    case "SET_BLOG_TEXT":
      return {
        ...state,
        blogtext: action.payload
      };
    case "RESET_BLOG_ARRAY_VALUES":
      return {
        ...state,
        blogtext: "",
        blogCategory: "product",
        blogid: action.payload + 1
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
