export const rateMovie = async (movieId: number, rating: number) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
            "guest_session_id"
        )}&api_key=${import.meta.env.VITE_API_KEY}`,
        {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json;charset=utf-8"    
            },
            body: `{"value": ${rating}}`
        }
    );
    return (await res.json());
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem(
            "guest_session_id"
        )}&api_key=${import.meta.env.VITE_API_KEY}`,
        {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json;charset=utf-8"    
            },
            body: `{"value": ${rating}}`
        }
    );
    return (await res.json());
};