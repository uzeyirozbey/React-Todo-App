import React, {Component} from 'react';
import {connect} from 'react-redux';
import OgrenciEkleForm from "../OgrenciComponents/OgrenciEkleForm";
import { yeniOgrenciEkle  , ogrenciDetayGetir,ogrenciGuncelle} from "../../actions/ogrenciEkle";
class OgrenciEklePage extends Component {
    componentDidMount(){
        const { match } = this.props;
        //sayfayı yenilediğinde veriler boş geliyor.
         if(!this.props.ogrenci && match.params.ID){
             this.props.ogrenciDetayGetir(match.params.ID)
         }
    }
    
    render(){
        return (
          <div>
              <h4> Öğrenci Ekle</h4>
              <hr/>
              <OgrenciEkleForm 
                ogrenci         = {this.props.ogrenci}
                ogrenciEkle     = {this.props.ogrenciEkle}
                ogrenciGuncelle = {this.props.ogrenciGuncelle}
                yeniOgrenciEkle = {this.props.yeniOgrenciEkle}/>
          </div>
        )
    }
}

const mapStateToProps = ({ ogrenciEkle, ogrenci}, props) => {
    return {
        ogrenciEkle,
        ogrenci: ogrenci.ogrenciList.find(item => item.ID_OGRENCI == props.match.params.ID)
    }
};
  const mapDispatchToProps = {
      //actionumuzun ismi,ni yazıyoruz
      yeniOgrenciEkle,
      ogrenciDetayGetir,
      ogrenciGuncelle
  };

export default connect(mapStateToProps,mapDispatchToProps)(OgrenciEklePage) ;