import {combineReducers} from 'redux';
import movie from './movies';
import ogrenci from "./ogrenci"
export default combineReducers({
  movie,
  ogrenci
});