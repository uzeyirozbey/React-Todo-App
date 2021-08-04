import React  from 'react';
import PropTypes from 'prop-types';
import OgrenciCard from "../components/OgrenciComponents/ogrenciCard";
import {Grid} from "semantic-ui-react";
import HashLoader from "react-spinners/HashLoader";
const Ogrencilist = ({ ogrenci }) => {
    const emptyMessage = (
        <p> Öğrenci bulunamadı!!</p>
    );

    const ogrenciList = (
        <div>
            <hr/>
            <HashLoader size= {"50"}  color = {'#98e7fc'}loading = { ogrenci.fetching } />   
            {
                ogrenci.error.response 
                ? <h3>Hata oluştu </h3> 
                : <Grid stackable columns = {3}>
                    {
                          ogrenci.ogrenci.map(ogrenci =>  <OgrenciCard key={ogrenci.ID_OGRENCI} ogrenci={ogrenci}/>)
                    }
                </Grid>
            }
        </div>
    );

    return (
       <div> 
            { ogrenci.length === 0 ? emptyMessage : ogrenciList}
        </div>
    )
}

Ogrencilist.propTypes = {
    // ogrenci : PropTypes.object.isRequired
    ogrenci : PropTypes.shape({
        ogrenci :PropTypes.array.isRequired
    }).isRequired
};
export default Ogrencilist
