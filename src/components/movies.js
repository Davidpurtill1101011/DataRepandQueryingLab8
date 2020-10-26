import React from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component{
    render(){
        // using the map and arrow function to 
        // pass everyting from the movieItem to
        // the movies page so it can be dislayed.
        return this.props.movies.map((movie)=>{
            return <MovieItem movies={movie}></MovieItem>
        })
    }
}