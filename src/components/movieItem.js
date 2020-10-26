import React from 'react';
import Card from 'react-bootstrap/Card';
export class MovieItem extends React.Component {
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
                </Card>
            </div>
        );
    }
}