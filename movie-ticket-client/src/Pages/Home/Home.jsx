import { useEffect, useState } from "react";
import MovieCard from "../../Component/MovieCard";
import { Col, Row } from "react-bootstrap";


const Home = () => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    console.log(movies);

    return (
        <>

            {/* <div className="row gutter-6">
                {movies && movies.map((movie, i) => (
                    <MovieCard key={i}
                        movie={movie}
                    ></MovieCard>
                ))}
            </div> */}
            <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                {movies && movies.map((movie, i) => (
                    <Col key={i}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Home;