  
import {BASE_API_URL} from '../config/env';
import axios from "axios";
export const OGRENCI_PENDING      = "OGRENCI_PENDING";
export const OGRENCI_LISTELE      = "OGRENCI_LISTELE";
export const OGRENCI_LISTELE_HATA = "OGRENCI_LISTELE_HATA";
export function fetchOgrenci(){
  return dispatch => {
  const params ={
        ID_KULLANICI :1,
        TOKEN : "7FE825C3-7699-4DC4-A0D7-0802A265C1B1"
      }
      axios.post( `${BASE_API_URL}/Ogrenci/OgrenciListele`, params)
      .then(response => response.data)
      .then(data =>  dispatch({
        type    : OGRENCI_LISTELE,
        payload : JSON.parse(data.NESNE)
      }))
      .catch(error => dispatch({
        type : OGRENCI_LISTELE_HATA,
        payload : error
      }))   
  }
}