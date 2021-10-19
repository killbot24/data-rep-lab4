import React from 'react';
export class Create extends React.Component {//Returns below text when called
    constructor() {
        super();
        //Saves value of taken in value.
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        
        this.state = {
            Title: '',
            Year: '',
            Poster: '',
        }

    }
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        })
    }
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
        //Takes in value (e, Thats passed from the input tag) and sets it to Poster in constructor
    }
    onSubmit(e) {
        e.preventDefault();
        alert("Movie:" + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
        //displays taken in info
    }
    render() {
        //Creates a form
        // on submiting takes value and sets state in stated method Eg. onchangeTitle saves to its method
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title</label>
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Year</label>
                        <input type='text' className='form-control' value={this.state.Year} onChange={this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Poster</label>
                        <input type='text' className='form-control' value={this.state.Poster} onChange={this.onChangePoster}></input>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Add Movie' className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}