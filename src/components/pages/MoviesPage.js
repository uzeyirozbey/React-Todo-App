import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies';
import MoviesList from '../MoviesList';
class MoviesPage extends Component {
    static propTypes = {
      movies: PropTypes.array.isRequired
    };
    componentDidMount(){
      this.props.fetchMovies();
    }
    render(){
        console.log(this.props);
        return (
          <div>
              <h2> Film Listesi</h2>
              <MoviesList movies = {this.props.movies}></MoviesList>
          </div>
        )
    }
}
 const mapStateToProps = ({ movies  }) => {
     movies = movies === undefined ? [] : movies  
     return {
         movies 
     }
}

const mapDispatchToProps = {
  fetchMovies
}
export default connect(mapStateToProps,mapDispatchToProps) (MoviesPage);