import {BASE_API_URL} from '../config/env';
import axios from "axios";
//Ogrenci Ekle Actionları
export const OGRENCI_EKLE_PENDING = "OGRENCI_EKLE_PENDING";
export const OGRENCI_EKLE         = "OGRENCI_EKLE";
export const OGRENCI_EKLE_HATA    = "OGRENCI_EKLE_HATA";
export function yeniOgrenciEkle(parameters){
  return dispatch => {
   
  setTimeout(()=> {
   
  const params ={
    ID_KULLANICI :1,
    TOKEN        : "7FE825C3-7699-4DC4-A0D7-0802A265C1B1",
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
     .then(data =>  dispatch({
      type    : OGRENCI_EKLE,
      payload : JSON.parse(data.NESNE)
     }))
     .catch(error => dispatch({
       type : OGRENCI_EKLE_HATA,
       payload : error
     }))   





  },5000)
  }
}