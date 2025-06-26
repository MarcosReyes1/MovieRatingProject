import { Card, Grid } from "semantic-ui-react"
import { DisplayType } from "."

interface DisplayData {
    id: number,
    overview: string,
    poster_path: string,
    title?: string,
    name?: string,
    vote_average: number,
    release_date: string
}

interface Props {
    data: DisplayData[],
    displayType: DisplayType
}

//doesnt matter if its tv shows or movies, want to display a column so use this component and then pass in the specific data
export const ColumnDisplay = (props: Props) => {

    const { data, displayType } = props

    return (
        <Grid
            columns={3}
            stackable
            centered
            verticalAlign="top"
            padded="vertically">
            {data.map((displayData: DisplayData) => (
                <Grid.Column key={displayData.id}>
                    <Card.Group>
                        <Card
                            fluid
                            image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                            header={displayType === DisplayType.Movies ? displayData.title : displayData.name}
                            meta={`Release Data: ${displayData.release_date} | Rating: ${displayData.vote_average}`}
                            description={displayData.overview.slice(0, 350) + "..."} />
                    </Card.Group>
                </Grid.Column>
            ))}
        </Grid>
    );
}