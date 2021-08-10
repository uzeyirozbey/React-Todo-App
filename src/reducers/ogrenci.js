import { Item } from "semantic-ui-react";
import {
    OGRENCI_PENDING,
    OGRENCI_LISTELE,
    OGRENCI_LISTELE_HATA,
    //öğrenci sil
    OGRENCI_SIL_PENDING,
    OGRENCI_SIL,
    OGRENCI_SIL_HATA
} from "../actions/ogrenci"
//hata vermemesi için
const initialState = {
    fetching: true,
    ogrenciList: [],
    ogrenci: {},
    error: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        //Öğrenci listele////////////
        case OGRENCI_PENDING:
            return {
                ...state,
                //Yükleme devam ediyor loading true
                fetching: true
            }
        case OGRENCI_LISTELE:
            return {
                ...state,
                ogrenciList: action.payload,
                fetching: false,
            }
        case OGRENCI_LISTELE_HATA:
            return {
                ...state,
                error: action.payload
            }
        // Öğrenci Sil
       
        case OGRENCI_SIL_PENDING:
            return {
                ...state
            }
        case OGRENCI_SIL:
            return {
                ...state,
                //silinen öğrenciyi getirmemek için filtreleme işlemi yapıyoruz
                ogrenciList :state.ogrenciList.filter(Item=>Item.ID_OGRENCI !== action.payload.ID)
                // ogrenciList:  action.payload,
            }
        case OGRENCI_SIL_HATA:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}