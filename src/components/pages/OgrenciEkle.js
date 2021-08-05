import React, {Component} from 'react';
import {connect} from 'react-redux';
import OgrenciEkleForm from "../OgrenciComponents/OgrenciEkleForm";
import { yeniOgrenciEkle } from "../../actions/ogrenciEkle";
class OgrenciEklePage extends Component {
    render(){
        return (
          <div>
              <h4> Öğrenci Ekle</h4>
              <hr/>
              <OgrenciEkleForm 
              ogrenciEkle= {this.props.ogrenciEkle}
              yeniOgrenciEkle = {this.props.yeniOgrenciEkle}/>
          </div>
        )
    }
}

const mapStateToProps = ({ ogrenciEkle }) => {
    return {
        ogrenciEkle
    }
};

  const mapDispatchToProps = {
      //actionumuzun ismi,ni yazıyoruz
      yeniOgrenciEkle
  };

export default connect(mapStateToProps,mapDispatchToProps)(OgrenciEklePage) ;