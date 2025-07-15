import { Container, Header, Loader, Menu, Segment } from "semantic-ui-react"
import { DisplayType } from "../home"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvShows } from "./query";
import { ColumnDisplay } from "../home/column-display";

export const Rated = () => {
    const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

    const { data: ratedMovies, isLoading: isLoadingRatedMovies} = useQuery({
        queryKey: ["ratedMovies"], 
        queryFn: fetchRatedMovies
    })

    const { data: ratedTvShows, isLoading: isLoadingTvShows} = useQuery({
        queryKey: ["ratedTvShows"], 
        queryFn: fetchRatedTvShows
    })

// const { data: ratedMovies, isLoading: isLoadingRatedMovies, error } = useQuery({
//     queryKey: ["ratedMovies"], 
//     queryFn: async () => {
//         console.log("Simple query function called!");
//         return { results: [{ id: 1, title: "Test Movie" }] };
//     },
//     enabled: true
// });
// fetchRatedMovies()
//   .then(result => console.log("Direct call result:", result))
//   .catch(error => console.log("Direct call error:", error));
//     const { data: ratedTvShows, isLoading: isLoadingRatedTvShows} = useQuery({
//         queryKey: ["ratedTvShows"], 
//         queryFn: fetchRatedTvShows
//     })

if (isLoadingRatedMovies || isLoadingTvShows) {
    return <Loader active/>
}
    
    return (
    <Container style={{marginTop: 50}}>
        <Menu pointing secondary>
            <Menu.Item 
            name="Movies" 
            active = {activeTabs === DisplayType.Movies} 
            onClick = {() => setActiveTabs(DisplayType.Movies)} />
            <Menu.Item 
            name="TV Shows" 
            active = {activeTabs === DisplayType.TvShows} 
            onClick = {() => setActiveTabs(DisplayType.TvShows)} />
        </Menu>

        <Segment>
            {activeTabs === DisplayType.Movies ? (
                <div>
                    <Header as={"h2"}>Rated Movies</Header>
                    <ColumnDisplay data={ratedMovies.results} displayType={DisplayType.Movies}/>
                </div>
            ) : (
                <div>
                    <Header as={"h2"}>Rated TV Shows</Header>
                    <ColumnDisplay data={ratedTvShows.results} displayType={DisplayType.Movies}/>
                </div>
            )}
        </Segment>
    </Container>)
}