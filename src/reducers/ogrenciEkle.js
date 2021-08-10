import {
    OGRENCI_EKLE_PENDING,
    OGRENCI_EKLE,
    OGRENCI_EKLE_HATA,

    OGRENCI_DETAY_PENDING,
    OGRENCI_DETAY,
    OGRENCI_DETAY_HATA,

    OGRENCI_GUNCELLE_PENDING,
    OGRENCI_GUNCELLE,
    OGRENCI_GUNCELLE_HATA
} from "../actions/ogrenciEkle"
//hata vermemesi için
const initialState = {
    fetching: false,
    done: false, //İşlemin bitip bitmediğini kontrol eder..
    ogrenci: [{
        fetching: false,
        done: false
    }],
    error: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case OGRENCI_EKLE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case OGRENCI_EKLE:
            return {
                ...state,
                // ogrenci: action.payload,
                fetching: false,
                done: true
            }
        case OGRENCI_EKLE_HATA:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }

        //////////Öğrenci Detay
        case OGRENCI_DETAY_PENDING:
            return {
                ...state,
                ogrenci: {
                    fetching: true
                }
            }
        case OGRENCI_DETAY:
            return {
                ...state,
                // ogrenci  :  action.payload
                ogrenci: {
                    ...action.payload,
                    fetching: false
                }
            }
        case OGRENCI_DETAY_HATA:
            return {
                ...state,
                ogrenci: {
                    fetching: false
                },
                error: action.payload
            }

        //GÜNCELLE
        case OGRENCI_GUNCELLE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case OGRENCI_GUNCELLE:
            return {
                ...state,
                // ogrenci: action.payload,
                fetching: false,
                done: true
            }
        case OGRENCI_GUNCELLE_HATA:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }
        default:
            return state
    }
}