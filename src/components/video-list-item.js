import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

const VideoListItem = ({movie}) => {
    return <li>
        <img height="100px" width="100px" src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="Une image du film"/>
        <h3>{movie.title} id: {movie.id}</h3>
        <p>Note moyenne: {movie.vote_average}</p>
        <p>Synopsis: {movie.overview}</p>
    </li>
}

export default VideoListItem;