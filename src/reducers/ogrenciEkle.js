import  
{
     OGRENCI_EKLE_PENDING, 
     OGRENCI_EKLE , 
     OGRENCI_EKLE_HATA
} from "../actions/ogrenciEkle"
//hata vermemesi için
const initialState = {
  fetching             : false,
  ogrenci              : [],
  error                : {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case OGRENCI_EKLE_PENDING:
            return {
                ...state,
                fetching : true
            }
        case OGRENCI_EKLE:
            return {
                ...state,
                ogrenci : action.payload,
                fetching : false
            }
        case OGRENCI_EKLE_HATA:
            return {
                ...state,
                error : action.payload,
                fetching : false
            }
        default:
            return state
    }
}