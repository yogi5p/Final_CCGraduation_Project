const AMENITIES_BASE_URL = `https://www.googleapis.com/customsearch/v1?`;

const API_URL = `https://codercamps-conduit.herokuapp.com/api/`;

const SearchAmenities = {
  getDetails: (zipCode, amenitySelected) => {
    var amenity_serach = amenitySelected.split(" ");
    var search_term = amenity_serach[0];
    const SEARCH_URL = `https://www.googleapis.com/customsearch/v1?q=${zipCode}+${
      amenity_serach[0]
    }+${
      amenity_serach[1]
    }&hl=en&num=10&output=json&cx=005628258892293915907:mdpbs1hv8do&key=AIzaSyBVKCTCORbBVrZCM7Yr0qj90gZ4Aogzy0Q`;

    var document;
    return fetch(SEARCH_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};

const User = {
  login: (useremail, password) =>
    fetch(API_URL + "users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: useremail,
          password: password
        }
      })
    }),
  register: (username, email, password) =>
    fetch(API_URL + "users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password
        }
      })
    })
};

export default {
  SearchAmenities
};
