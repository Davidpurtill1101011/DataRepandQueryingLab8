import React from 'react';
import axios from 'axios';
export class Create extends React.Component {

    constructor() {
        
        super();
        //binding everything in the constructor.
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        // states to be used and passed data into.
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    // these 4 functions are setting the state of the 
    // title, year and poster. 
    // in the 4th function we made a button to confirm the data been passed in.
    onChangeMovieTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }

    onChangeMoviePoster(e){
        this.setState({
            Poster: e.target.value
        })
    }
    // submit is used for updateing the movies read page.
    onSubmit(e) {
        e.preventDefault();
        alert("Movie added " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
        const newMovie= {
            Title:this.state.Title,
            Year:this.state.Year,
            Poster: this.state.Poster
        }
        // axios is used for linking the server and the web app
        axios.post('http://localhost:4000/api/movies', newMovie).then(response => console.log(
            response.data
        )).catch(error => console.log(error));
    }

    onChangeMovieYear(e){
        this.setState({
            Year: e.target.value
        })
    }

    render() {
        // just added text to the Create.js page
        // noting to display as of yet.
        // jsx code.
        return (
            <div>
                <h1>Create Component</h1>
                {/* in this form we added in a button and 3 
                input boxes to add new movies to the read page */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Title</label>
                        <input type="text" className="form-control" value={this.state.Title}
                            onChange={this.onChangeMovieTitle}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Add Title</label>
                        <input type="text" className="form-control" value={this.state.Year}
                            onChange={this.onChangeMovieYear}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Add Poster</label>
                        <input type="text" className="form-control" value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}>
                        </input>
                    </div>
                    <div>
                        <input type="submit"
                            value="Add Movies">
                        </input>
                    </div>

                </form>
            </div>
        );
    }
}