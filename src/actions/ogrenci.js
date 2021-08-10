  
import {BASE_API_URL} from '../config/env';
import axios from "axios";
export const OGRENCI_PENDING        = "OGRENCI_PENDING";
export const OGRENCI_LISTELE        = "OGRENCI_LISTELE";
export const OGRENCI_LISTELE_HATA   = "OGRENCI_LISTELE_HATA";

//Öğrenci Silme işlemleri
export const OGRENCI_SIL_PENDING    = "OGRENCI_SIL_PENDING";
export const OGRENCI_SIL            = "OGRENCI_SIL";
export const OGRENCI_SIL_HATA       = "OGRENCI_SIL_HATA";

export function fetchOgrenci(){
  return dispatch => {
  const params ={
        ID_KULLANICI :1,
        TOKEN : "313A659C-4A4B-4322-BB37-515B2E75CD31"
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

export function ogrenciSil(ID){
  return dispatch => {
  const params ={
        ID_KULLANICI : 1,
        TOKEN        : "313A659C-4A4B-4322-BB37-515B2E75CD31",
        ID_OGRENCI   : ID
      }
      
      axios.post( `${BASE_API_URL}/Ogrenci/OgrenciSil`, params)
       .then(response => response.data)
       .then(data =>  dispatch({
         type    : OGRENCI_SIL,
         payload :  Object.assign({}, JSON.parse(data.NESNE),{ID} ) 
       }))
       .catch(error => dispatch({
        type : OGRENCI_SIL_HATA,
         payload : error
       }))   
  }
}
