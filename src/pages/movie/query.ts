export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
            headers: {
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWM1NzAyZWYzNTEwZjgxZmFmMjI2MjY2NDk4ODVlMiIsIm5iZiI6MTc1MDg2Nzc3Ni4yMjcsInN1YiI6IjY4NWMxZjQwZmFjZDEyNGI0YjE3MDgxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AZHjMmG51PT57ggkwJ9NtvLPc-cMrzKbdtPRfsGGXaA"
            },
        }
    );
    return (await res.json());
};