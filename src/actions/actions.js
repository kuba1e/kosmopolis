const gotPopularMovies = (data)=>({type: 'GOT_POPULAR_MOVIES', payload:data})
const failedGotPopularMovies = (error)=>({type: 'FAILED_GOT_POPULAR_MOVIES', payload:error})

export {gotPopularMovies, failedGotPopularMovies}