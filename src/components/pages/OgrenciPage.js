import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchOgrenci } from '../../actions/ogrenci';
import OgrenciList from '../OgrenciList';
class OgrenciPage extends Component {
    static propTypes = {
      ogrenci: PropTypes.object.isRequired
    };
    componentDidMount(){
      this.props.fetchOgrenci();
    }
    render(){
        return (
          <div>
              <h2> Öğrenci Listesi</h2>
              <OgrenciList ogrenci = {this.props.ogrenci}></OgrenciList>
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
    fetchOgrenci
}
export default connect(mapStateToProps,mapDispatchToProps) (OgrenciPage);