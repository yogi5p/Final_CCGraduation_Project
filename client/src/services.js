const AMENITIES_BASE_URL = `http://www.google.com/search?`;
const apiKey =
  "ugzweGOs6tcJz3HlOoJRbSiEb4rfBvaXNtW_Wut4sD-IJOZnQHkB2zADT2aOR98jTM_7-FiBlCnPOk-ZSaOZ71ruph4G0J72pp-f2tiECmdV1JVUxt5yq9e4n2TmWnYx";

const SearchAmenities = {
  getDetails: (zipCode, amenitySelected) =>
    fetch(
      `${AMENITIES_BASE_URL}q=${zipCode}&as_q=${amenitySelected}&hl=en&num=10&output=json`
    )
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
