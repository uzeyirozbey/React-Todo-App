import  { OGRENCI_PENDING, OGRENCI_LISTELE , OGRENCI_LISTELE_HATA} from "../actions/ogrenci"
//hata vermemesi için
const initialState = {
  fetching  : true,
  ogrenci   : [],
  error     : {}
};
export default (state = initialState, action) => {
    switch (action.type) {

        case OGRENCI_PENDING:
            return {
                ...state,
                //Yükleme devam ediyor loading true
                fetching : true
            }

        case OGRENCI_LISTELE:
            return {
                ...state,
                ogrenci : action.payload,
                //Yükleme işlemi bitti . loading false
                fetching : false
            }

        case OGRENCI_LISTELE_HATA:
            return {
                ...state,
                error : action.payload
            }
        default:
            return state
    }
}