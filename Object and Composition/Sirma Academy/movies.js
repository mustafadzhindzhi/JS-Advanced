function showMoviews(commands) {
    const movies = []; 

    for (let command of commands) {
        const items = command.split(' '); 

        if (items[0] === 'addMovie') { 
            const movieName = items.slice(1).join(' ');
            movies.push({ name: movieName });
        } else {
            let isAddDirector = false; 
            let isAddDate = false; 
            let commandIndex = -1; 

            if (items.includes('directedBy')) { 
                commandIndex = items.indexOf("directedBy"); 
                isAddDirector = true; 
            } else if (items.includes('onDate')) {
                commandIndex = items.indexOf("onDate"); 
                isAddDate = true;
            } else {
                continue;
            }; 

            const info = items.slice(commandIndex + 1).join(' '); 
            const movieName = items.slice(0, commandIndex).join(' '); 

            const movieIndex = movies.findIndex( 
                (movie) => movie.name === movieName); 

            if (movieIndex === -1) { 
                continue;
            };

            if (isAddDirector) { 
                movies[movieIndex].director = info; 
            } else if (isAddDate) { 
                movies[movieIndex].date = info; 
            }
        };
    };
    const fullMoviesInfo = movies.filter((movie) => movie.name && movie.director && movie.date !== undefined); 
    fullMoviesInfo.forEach((movie) => console.log(JSON.stringify(movie)))
};

showMoviews([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    " Spinderman 2 onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen"
]);

function showMoviews2(commands) {
    const movies = [];
    for (let command of commands) {
        let items = command.split(' '); 

        if (items[0] === 'addMovie') {
            const movieName = items.slice(1).join(' '); 
            movies.push({ name: movieName });
            continue;
        }

        let isAddDirector = false;
        let commandIndex = -1;
        if (items.includes('directedBy')) {
            commandIndex = items.indexOf('directedBy'); 
            isAddDirector = true;
        } else if (items.includes('onDate')) {
            commandIndex = items.indexOf('onDate');
        } else {
            continue;
        };

        const info = items.slice(commandIndex + 1).join(' '); 
        const movieName = items.slice(0, commandIndex).join(' '); 
        const movieIndex = movies.findIndex((movie) => movie.name === movieName);

        if (movieIndex === -1) {
            continue;
        };

        if (isAddDirector) {
            movies[movieIndex].director = info;
        } else {
            movies[movieIndex].date = info;
        }
    };
    const fullMoviesInfo = movies.filter((movie) => movie.name && movie.director && movie.date);
    fullMoviesInfo.forEach((movie) => console.log(JSON.stringify(movie)));
}

showMoviews2([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    " Spinderman 2 onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen"
]);