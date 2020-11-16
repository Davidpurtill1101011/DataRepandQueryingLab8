import React from 'react';
import axios from 'axios';
import { Movies } from './movies';

export class Read extends React.Component {

    state = {
        movies: [        ]
    };

    componentDidMount(){
        // adding in the url for the json blob. axios lets us make http request to a site to
        // pull data from and display it in the webapp.
        axios.get('http://localhost:4000/api/movies')
        .then(response => {
            // this then takes the data and passes it back up to the movies array
            // in the state.
            this.setState({movies:response.data.myMovies});
        })
        .catch((error)=>{// here we are just throwing an error to the console.
            console.log(error);
        });
    }

    render() {
        return (
            // specifying what we want to dislay in the header component
            //JSX
            <div>
                <h1>This is the read Component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}