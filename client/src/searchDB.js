var DBrequest = {

	getMovies: (callback) => {
		$.ajax({
			url: 'localhost:3000/movies',
			type: 'GET',
			success: (response) => {callback(response)},
			error: () => {console.log('could not get movies')}
		});
	},

	addMovie: (title) => {
		$.ajax({
			url: '127.0.0.1:3000/movies',
			type: 'POST',
			data: JSON.stringify(title);
			success: () => {},
			error: () => {console.log('could not post movie')}
		})
	}
}


