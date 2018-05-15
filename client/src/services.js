const AMENITIES_BASE_URL = `https://www.googleapis.com/customsearch/v1?`;

const SearchAmenities = {
  // getFavorites: (zipCode, amenitySelected) => {
  //   var amenity_serach = amenitySelected.split(" ");
  //   var search_term = amenity_serach[0];
  //   const SEARCH_URL = `https://www.googleapis.com/customsearch/v1?q=${zipCode}+${
  //     amenity_serach[0]
  //   }+${
  //     amenity_serach[1]
  //   }&hl=en&num=10&output=json&cx=005628258892293915907:mdpbs1hv8do&key=AIzaSyBVKCTCORbBVrZCM7Yr0qj90gZ4Aogzy0Q`;
  //   console.log(zipCode);
  //   console.log(amenitySelected);

  //   const AMENITY_SEARCH_URL = `http://www.google.com/search?q=${zipCode}&as_q=+${
  //     amenity_serach[0]
  //   }+${amenity_serach[1]}&hl=en&num=10&output=json`;
  //   console.log(AMENITY_SEARCH_URL);
  //   var document;
  //   fetch(AMENITY_SEARCH_URL)
  //     .then(resp => resp.json())
  //     .then(
  //       payload =>
  //         // this.setState({
  //         {
  //           document: payload;
  //         }
  //       // })
  //     )
  //     .catch(err => console.log(err));

  //   console.log(document);

  //   return fetch(SEARCH_URL);
  // },
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
  // ,
  //   search: term => {
  //     const uriEncoded = encodeURIComponent(term);
  //     return fetch(
  //       `${MOVIE_BASE_URL}/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=${uriEncoded}&include_adult=false&sort_by=created_at.asc&page=1`
  //     );
  //   },
  //   favorite: (movie, userToken) =>
  //     fetch(API_URL + "movies", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + userToken
  //       },
  //       body: JSON.stringify({
  //         movie: {
  //           movie_id: movie.id,
  //           poster_path: movie.poster_path,
  //           title: movie.title,
  //           overview: movie.overview
  //         }
  //       })
  //     }),
  //   getFavorites: userToken =>
  //     fetch(API_URL + "movies", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + userToken
  //       }
  //     }),
  //   delFavorite: (movieId, userToken) =>
  //     fetch(API_URL + "movie.id", {
  //       method: "DELETE",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + userToken
  //       }
  //     })
};

export default {
  SearchAmenities
};
