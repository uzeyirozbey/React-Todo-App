import {BASE_API_URL} from '../config/env';
import axios from "axios";
export function fetchMovies(){
  return dispatch => {
      axios.get( `${BASE_API_URL}/Ogrenci/OgrenciListele`)
      .then(response => console.log(response))
  }
}