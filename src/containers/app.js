import React, {Component} from 'react';
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'

import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIE_URL = "discover/movie?language=fr&sort_by=popularity.desc";
const API_KEY = "api_key=1a9538af85dc38a3b2ecc64c859fda68";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {movieList: {}, currentMovie: {}}
    }

    componentWillMount() {
        this.initMovies();
    }

    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}&${API_KEY}`).then(function (response) {
            this.setState({
                movieList: response.data.results.slice(1, 6),
                currentMovie: response.data.results[0]
            }, function () {
                this.applyVideoToCurrentMovie();
            });

            //console.log(this.state.currentMovie);
        }.bind(this));
    }

    applyVideoToCurrentMovie() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function (response) {
            //console.log(response);
            const youtubeKey = response.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubeKey;
            //console.log(youtubeKey);
            this.setState({currentMovie: newCurrentMovieState});
            console.log(this.state);
        }.bind(this));

    }

    render() {

        const renderVideoList = () => {
            if (this.state.movieList.length >= 5) {
                return <VideoList movieList={this.state.movieList}/>
            }
        };
        return (

            <div>
                <div className="search_bar">
                    <SearchBar/>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Video videoId={this.state.currentMovie.videoId}/>
                        <VideoDetail title={this.state.currentMovie.title}
                                     description={this.state.currentMovie.overview}/>
                    </div>
                    <div className="col-md-4">
                        {renderVideoList()}
                    </div>
                </div>

            </div>
        );
    }
}

export default App
