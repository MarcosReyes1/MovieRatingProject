export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDkzZTU5YzZjZGMwNjNjOGU1NjE4YTkzMjAwNGFhOSIsIm5iZiI6MTc1MDg2Nzc3Ni4yMjcsInN1YiI6IjY4NWMxZjQwZmFjZDEyNGI0YjE3MDgxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-1Mlpdn19NJwpqCrjN6fgzPDYhPtdHcWqHG_BM554Zg"
            },
        }
    );
    return (await res.json());
};