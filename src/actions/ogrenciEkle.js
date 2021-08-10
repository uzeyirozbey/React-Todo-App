import {BASE_API_URL} from '../config/env';
import axios from "axios";
//Ogrenci Ekle Actionları
export const OGRENCI_EKLE_PENDING  = "OGRENCI_EKLE_PENDING";
export const OGRENCI_EKLE          = "OGRENCI_EKLE";
export const OGRENCI_EKLE_HATA     = "OGRENCI_EKLE_HATA";

export const OGRENCI_DETAY_PENDING  = "OGRENCI_DETAY_PENDING";
export const OGRENCI_DETAY         = "OGRENCI_DETAY";
export const OGRENCI_DETAY_HATA    = "OGRENCI_DETAY_HATA";

export const OGRENCI_GUNCELLE_PENDING  = "OGRENCI_GUNCELLE_PENDING";
export const OGRENCI_GUNCELLE          = "OGRENCI_GUNCELLE";
export const OGRENCI_GUNCELLE_HATA     = "OGRENCI_GUNCELLE_HATA";

export function yeniOgrenciEkle(parameters){
  return dispatch => {   
  const params ={
    ID_KULLANICI :1,
    TOKEN        : "313A659C-4A4B-4322-BB37-515B2E75CD31",
    TC_KIMLIK_NO : parameters.TcKimlikNo,
    AD           : parameters.Ad,
    SOYAD        : parameters.Soyad,
    DOGUM_TARIHI : parameters.DogumTarihi,
    CEP_TELEFON  : "",
    EPOSTA       : "",
    ADRES        : "",
    ANNE_AD_SOYAD: "",
    ANNE_TEL     : "",
    BABA_AD_SOYAD: "",
    BABA_TEL     : "",
    CINSIYET     : "",
    ID_IL        : "",
    ID_ILCE      : "",
    ID_SUBE      : "",
    ID_SINIF     : "",
    SIRA_NO      : ""
  }

   axios.post( `${BASE_API_URL}/Ogrenci/OgrenciEkle`, params)
  .then(response => response.data)
  .then(response =>  dispatch({
     type    : OGRENCI_EKLE,
     payload : JSON.stringify(response.NESNE)
   }))
   .catch(error => dispatch({
     type : OGRENCI_EKLE_HATA,
     payload : error
   }))   
  }
}

export function ogrenciDetayGetir(ID){
  return dispatch => {   
  let params ={
    ID_KULLANICI :1,
    TOKEN        :"313A659C-4A4B-4322-BB37-515B2E75CD31",
    ID_OGRENCI   :ID,
    TC_KIMLIK_NO :''
  };
  axios.post( `${BASE_API_URL}/Ogrenci/OgrenciDetayiGetir`, params)
    .then(response => response.data)
    .then(response =>  dispatch({
     type    : OGRENCI_GUNCELLE,
     payload : JSON.parse(response.NESNE)
    //  payload : JSON.parse(response.NESNE)
    }))
    .catch(error => dispatch({
      type : OGRENCI_GUNCELLE_HATA,
      payload : error
    }))   
  }
}



export function ogrenciGuncelle(parameters, ID){
  return dispatch => {   
  let params ={
    ID_KULLANICI :1,
    TOKEN        : "313A659C-4A4B-4322-BB37-515B2E75CD31",
    ID_OGRENCI   : ID,
    TC_KIMLIK_NO : parameters.TcKimlikNo,
    AD           : parameters.Ad,
    SOYAD        : parameters.Soyad,
    DOGUM_TARIHI : parameters.DogumTarihi,
    CEP_TELEFON  : "",
    EPOSTA       : "",
    ADRES        : "",
    ANNE_AD_SOYAD: "",
    ANNE_TEL     : "",
    BABA_AD_SOYAD: "",
    BABA_TEL     : "",
    CINSIYET     : "",
    ID_IL        : "",
    ID_ILCE      : "",
    ID_SUBE      : "",
    ID_SINIF     : "",
    SIRA_NO      : ""
  };

  axios.post( `${BASE_API_URL}/Ogrenci/OgrenciGuncelle`, params)
    .then(response => response.data)
    .then(response =>  dispatch({
     type    : OGRENCI_GUNCELLE,
     payload : JSON.parse(response.NESNE)
    }))
    .catch(error => dispatch({
      type : OGRENCI_GUNCELLE_HATA,
      payload : error
    }))   
  }
}
