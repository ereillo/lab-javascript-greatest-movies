// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let getDirectors = moviesArray.map((element) => {
        return element.director
    })
    console.log(getDirectors)
    return getDirectors
}
console.log(getAllDirectors)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
      }

    let filteredMovies = moviesArray.filter((element) => {
        return (element.director === "Steven Spielberg" && element.genre.includes("Drama")
        );
    });

    return filteredMovies.length;
  }

console.log(howManyMovies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

    let totalScore = moviesArray.reduce ((acc, elem) => {
        if (elem.score) //si existe el elemento score, entocnes añadimos al acumulador
        {
        return acc + elem.score
        }
        else 
        {
        return acc
        }
    }, 0)

    return Number((totalScore / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies =moviesArray.filter((eachMovie) => {
        if(moviesArray.length ===0){
            return 0;
        }
        else { return eachMovie.genre.includes("Drama");
    }  
    }, 0);

    if (dramaMovies.length === 0) {
        return 0                         //NO ME QUEDA CLARO POR QUÉ HAY QUE PONER ESTO AQUÍ
    }

    let totalScoreDrama = dramaMovies.reduce((total,movie)=>{
        if(movie.score){
        return total + movie.score
        } else{
            return total}
     }, 0);
     return Number((totalScoreDrama/dramaMovies.length).toFixed(2))
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
    moviesArrayCopy.sort((elem1, elem2) => {
        if (elem1.year > elem2.year) {
            return 1;
        }
        else if (elem1.year < elem2.year){
            return -1;
        }
        else {
            if (elem1.title > elem2.title) {
              return 1;
            } else if (elem1.title < elem2.title) {
              return -1;
            } else {
              return 0;
            }
          }
    });

    return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesCopy = JSON.parse(JSON.stringify(moviesArray));

    let sortedMovies = moviesCopy.sort((elem1, elem2) => {
        if (elem1.title > elem2.title) {
            return 1;
        } else if (elem1.title < elem2.title) {
            return -1;
        } else {
            return 0;
        }
    });

    let movieTitles = sortedMovies.map(movie => movie.title);

    if (movieTitles.length <= 20) {
        return movieTitles;
    } else {
        return movieTitles.slice(0, 20);
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
