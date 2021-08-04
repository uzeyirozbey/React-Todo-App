import React  from 'react';
 import PropTypes from 'prop-types';
import ogrenci from '../reducers/ogrenci';

const Movieslist = ({ movies }) => {
   
    const emptyMessage = (
        <p> Film Yok</p>
    );

    const moviesList = (
        <div>
            {
                ogrenci.error.response
                ? <h3>Hata oluştu </h3> : "Hata yok"
            }
        </div>
    );

    return (
       <div> 
            { movies.length === 0 ? emptyMessage : moviesList}
        </div>
    )
}

Movieslist.propTypes = {
    movies :PropTypes.array.isRequired

    // movies : PropTypes.array.isRequired
};
// Movieslist.defaultsProps = {};
export default Movieslist
