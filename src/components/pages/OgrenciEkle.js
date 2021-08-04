import React, {Component} from 'react';
import OgrenciEkleForm from "../OgrenciComponents/OgrenciEkleForm";
class OgrenciEklePage extends Component {
    render(){
        return (
          <div>
              <h4> Öğrenci Ekle</h4>
              <hr/>
              <OgrenciEkleForm/>
          </div>
        )
    }
}
export default OgrenciEklePage;