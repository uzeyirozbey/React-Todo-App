import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchOgrenci, ogrenciSil } from '../../actions/ogrenci';
import OgrenciList from '../OgrenciList';
class OgrenciPage extends Component {
    static propTypes = {
      ogrenci: PropTypes.object.isRequired,
      ogrenciSil : PropTypes.func.isRequired
    };

    componentDidMount(){
      this.props.fetchOgrenci();
    }
    
    render(){
        return (
          <div>
              <h2> Öğrenci Listesi</h2>
              <OgrenciList 
                ogrenciSil = {this.props.ogrenciSil}
                ogrenci    = {this.props.ogrenci}/>
          </div>
        )
    }
}
 const mapStateToProps = ({ ogrenci  }) => {
     return {
        ogrenci
     }
}

const mapDispatchToProps = {
    fetchOgrenci,
    ogrenciSil
}
export default connect(mapStateToProps,mapDispatchToProps) (OgrenciPage);