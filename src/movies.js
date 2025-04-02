// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 1: All directors
function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
  }
  
  // Bonus - Iteration 1.1: Clean the array of directors
  function getAllDirectorsUnique(movies) {
    const allDirectors = getAllDirectors(movies);
    return [...new Set(allDirectors)];
  }
  
  // Iteration 2: Steven Spielberg. The best?
  function howManyMovies(movies) {
    return movies.filter(movie => 
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    ).length;
  }
  
  // Iteration 3: All scores average
  function scoresAverage(movies) {
    if (movies.length === 0) return 0;
    const totalScore = movies.reduce((sum, movie) => {
      return sum + (movie.score || 0);
    }, 0);
    return parseFloat((totalScore / movies.length).toFixed(2));
  }
  
  // Iteration 4: Drama movies
  function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
  }
  
  // Iteration 5: Order by year
  function orderByYear(movies) {
    return [...movies].sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
  }
  
  // Iteration 6: Alphabetic order
  function orderAlphabetically(movies) {
    return movies
      .map(movie => movie.title)
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 20);
  }
  
  // BONUS - Iteration 7: Time format
  function turnHoursToMinutes(movies) {
    return movies.map(movie => {
      const duration = movie.duration;
      const hours = duration.includes('h') ? parseInt(duration.split('h')[0]) : 0;
      const minutes = duration.includes('min') ? parseInt(duration.split(' ')[1]) : 0;
      return {
        ...movie,
        duration: hours * 60 + minutes
      };
    });
  }
  
  // BONUS - Iteration 8: Best yearly score average
    function bestYearAvg(movies) {
        if (movies.length === 0) return null;
    
        const yearScores = {};
    
        movies.forEach(movie => {
        if (!yearScores[movie.year]) {
            yearScores[movie.year] = { totalScore: 0, count: 0 };
        }
        yearScores[movie.year].totalScore += movie.score || 0;
        yearScores[movie.year].count++;
        });
    
        let bestYear = null;
        let bestAvg = 0;
    
        for (const year in yearScores) {
        const avgScore = yearScores[year].totalScore / yearScores[year].count;
        if (avgScore > bestAvg || (avgScore === bestAvg && year < bestYear)) {
            bestAvg = avgScore;
            bestYear = year;
        }
        }
    
        return `The best year was ${bestYear} with an average score of ${bestAvg}`;
    }