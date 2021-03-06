import React from 'react';
import { Movies } from './movies';
import axios, { Axios } from 'axios'
export class Read extends React.Component {//Returns below text when called

    state = {
        movies: []

    };
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496') //Gets info from url
            .then(
                (response) => {
                    this.setState({ movies: response.data.movies}) //Takes the response and saves it into movies above. Works from there as did before
                })
            .catch(//Error Catch
                (error) => { console.log(error) }//Displays error
            )

    }
    render() {
        return (
            <div>
                <h1>This is the read Component</h1>
                <Movies movies={this.state.movies}></Movies>

            </div>
            // Runs movies.js that then runs movieitem that for each new movie creates a card and fills in needed info
        );
    }
}