/* eslint-disable react/prop-types */

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    // const { show } = movie;
    // console.log(movie.show)
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.show.image.medium} />
            <Card.Body>
                <Card.Title>{movie.show.name}</Card.Title>
                <Card.Text>
                    <p>Language: {movie.show.language}</p>
                    <p>Show type: {movie?.show?.type}</p>
                    <p>Premiered: {movie.show?.premiered}</p>
                    <p>Geners: {movie.show?.genres[0]}</p>
                    <p>Geners: {movie.show?.genres[0]}</p>
                </Card.Text>
                <Link to={`/details/${movie.show.id}`}><Button variant="primary">See Details</Button></Link>
            </Card.Body>
        </Card>

    );
};

export default MovieCard;