import { useState, useEffect } from 'react';
import './overlay.css';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-hot-toast';

const MovieDetails = () => {
    const allMovie = useLoaderData();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [addedMovies, setAddedMovies] = useState([]);

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        setAddedMovies(storedMovies);
    }, []);

    const movieDetails = allMovie?.find((movieID) => {
        if (parseInt(id) === movieID.show.id) {
            return movieID.show;
        }
    });

    const handleStorage = (movie) => {
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        const updatedMovies = [...storedMovies, movie];
        localStorage.setItem('movies', JSON.stringify(updatedMovies));
        setAddedMovies(updatedMovies);
        toast.success('Your movie added!')
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleClearStorage = () => {
        localStorage.removeItem('movies');
        setAddedMovies([]);
    };

    return (
        <>
            <Button className='my-2' onClick={openModal}>View Your List</Button>
            <Card className="bg-dark text-white position-relative">
                <Card.Img src={movieDetails.show.image.original} alt="Card image" />
                <div className="card-overlay">
                    <Card.ImgOverlay>
                        <Card.Title>{movieDetails.show.name}</Card.Title>
                        <Card.Text>
                            <p>Language: {movieDetails.show.language}</p>
                            <p>Show type: {movieDetails?.show?.type}</p>
                            <p>Premiered: {movieDetails.show?.premiered}</p>
                            <p>Genres: {movieDetails.show?.genres[0]}</p>
                            <p>
                                Day: {movieDetails.show?.schedule.days[0]}, Time:{' '}
                                {movieDetails.show?.schedule.time}
                            </p>
                            <a href={movieDetails.show.url}></a>
                        </Card.Text>
                        <Button onClick={() => handleStorage(movieDetails.show.name)}>
                            Add to Your List
                        </Button>
                        <Card.Text>{movieDetails.show.summary}</Card.Text>

                    </Card.ImgOverlay>
                </div>
                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Added Movies</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {addedMovies.length === 0 ? (
                            <p>No movies added yet.</p>
                        ) : (
                            <ul>
                                {addedMovies.map((movie, index) => (
                                    <li key={index}>{movie}</li>
                                ))}
                            </ul>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClearStorage}>
                            Clear All
                        </Button>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card>
        </>
    );
};

export default MovieDetails;
