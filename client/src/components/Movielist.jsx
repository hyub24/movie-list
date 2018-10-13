import React from 'react';
import $ from 'jQuery';

class Movielist extends React.Component {
  constructor() {
    super();
    var movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];
    this.state = {
      movielist: [] 
    }
 //   this.getMovies();
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    //console.log('hello')
    var callback = (movieArr) => {
      this.setState({
        movielist: movieArr
      })
    }
    $.ajax({
      url: 'http://127.0.0.1:3000/movies',
      type: 'GET',
      success: (response) => {callback(response)},
      error: () => {console.log('could not get movies')}
    });
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <div>Search</div>
        <input type="text" />
        <div className="movie-list">
          {this.state.movielist.map((ele) => <div className="entry">{ele.title}</div>)}
        </div>
      </div>
    );
  }
}

export default Movielist;