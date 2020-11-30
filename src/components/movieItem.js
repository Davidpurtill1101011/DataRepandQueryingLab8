import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export class MovieItem extends React.Component {

    constructor(){
        super();
        // we need to bind the deleteMovie to make sure it works.
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e){
        e.preventDefault();
        // making the changes on the client side.
        axios.delete('http://localhost:4000/api/movies/' + this.props.movies._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {

        return (
            // displaying the json blob we used to make
            // the movies web-app. And displayed it in a card.
            // this is also passed to the movies page.
            //jsx
            <div>
                <Card>
                    <Card.Header><h4>{this.props.movies.Title}</h4></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.movies.Poster} width="400" height="400"></img>
                            <footer className="blockquote-footer">
                            <h5>{this.props.movies.Year}</h5>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* adding the button to delete a movie from the db */}
                    <Button variant="danger" onClick={this.DeleteMovie} size="lg">Delete</Button>
                </Card>
            </div>
        );
    }
}