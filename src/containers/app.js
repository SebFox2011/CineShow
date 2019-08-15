import React, {Component} from 'react';
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIE_URL = "discover/movie?language=fr&sort_by=popularity.desc";
const API_KEY = "api_key=1a9538af85dc38a3b2ecc64c859fda68";

 class App extends Component {
     constructor(props) {
         super(props);
         this.state={movieList:{},currentMovie:{}}
     }

     componentWillMount () {
         axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}&${API_KEY}`).then(function(response){
             this.setState({movieList:response.data.results.slice(1,6)});
             this.setState({currentMovie:response.data.results[0]});

             console.log('',this.state.currentMovie)
             console.log('--------------');
             console.log('',this.state.movieList);
             console.log('--------------');

         }.bind(this));
     }

     render() {
        return (

                <div>
                    <SearchBar/>
                    <VideoList/>
                </div>
        );
    }
}

export default App
