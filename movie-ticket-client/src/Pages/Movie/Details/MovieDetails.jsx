import { useState, useEffect } from 'react';
import './overlay.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';

const MovieDetails = () => {
    const allMovie = useLoaderData();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [addedMovies, setAddedMovies] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        setAddedMovies(storedMovies);
    }, []);

    const movieDetails = allMovie?.find((movieID) => {
        if (parseInt(id) === movieID.show.id) {
            return movieID.show;
        }
    });

    const handleStorage = (movie, day, time) => {
        const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        const updatedMovies = [...storedMovies, { movie, day, time }];
        localStorage.setItem('movies', JSON.stringify(updatedMovies));
        setAddedMovies(updatedMovies);
        toast.success('Your movie added!');
        setSelectedDay(day);
        setSelectedTime(time);

        // Save name, email, day, and time in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('selectedDay', day);
        localStorage.setItem('selectedTime', time);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleClearStorage = () => {
        localStorage.removeItem('movies');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('selectedDay');
        localStorage.removeItem('selectedTime');
        setAddedMovies([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}`);

        // Save name and email in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);

        setName('');
        setEmail('');
    };

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        const storedEmail = localStorage.getItem('email');
        const storedDay = localStorage.getItem('selectedDay');
        const storedTime = localStorage.getItem('selectedTime');

        if (storedName && storedEmail && storedDay && storedTime) {
            setName(storedName);
            setEmail(storedEmail);
            setSelectedDay(storedDay);
            setSelectedTime(storedTime);
        }
    }, []);

    return (
        <>
            <Button className="my-2" onClick={openModal}>
                View Your List
            </Button>
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
                            <Link to={movieDetails.show.url}>Movie Details Link</Link>
                            <p className="">
                                <FaStar className="text-warning" /> {movieDetails.show?.rating.average} out of 10
                            </p>
                        </Card.Text>
                        <Button
                            onClick={() =>
                                handleStorage(
                                    movieDetails.show.name,
                                    movieDetails.show?.schedule.days[0],
                                    movieDetails.show?.schedule.time
                                )
                            }
                        >
                            Book the movie to Your List
                        </Button>
                        <div>{movieDetails.show.summary}</div>
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
                                    <li key={index}>
                                        {movie.movie} - {movie.day}, {movie.time}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Selected Day</Form.Label>
                                <Form.Control
                                    type="text"
                                    disabled
                                    value={localStorage.getItem('selectedDay') || ''}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Selected Time</Form.Label>
                                <Form.Control
                                    type="text"
                                    disabled
                                    value={localStorage.getItem('selectedTime') || ''}
                                />
                            </Form.Group>
                            <Button className='my-2' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
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
