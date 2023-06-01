import './overlay.css'
import { useLoaderData, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const MovieDetails = () => {
    const allMovie = useLoaderData();
    const { id } = useParams();

    // find movie details
    const movieDetails = allMovie?.find(movieID => {
        if (parseInt(id) === movieID.show.id) {
            // console.log(movieID.show);
            return movieID.show
        }
    })
    console.log(movieDetails)

    return (
        <Card className="bg-dark text-white position-relative">
            <Card.Img src={movieDetails.show.image.original} alt="Card image" />
            <div className="card-overlay">
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </div>
        </Card>
    );
};

export default MovieDetails;