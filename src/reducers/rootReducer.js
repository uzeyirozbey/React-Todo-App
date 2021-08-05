import {combineReducers} from 'redux';
import movie from './movies';
import ogrenci from "./ogrenci";
import ogrenciEkle from "./ogrenciEkle";
export default combineReducers({
  movie,
  ogrenci,
  ogrenciEkle
});