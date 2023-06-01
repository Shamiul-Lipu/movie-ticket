import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>About Us</h5>
                        <p className=''>
                            At Movie Ticket, we are dedicated to providing movie enthusiasts with a convenient and enjoyable ticket booking experience.
                        </p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Contact Us</h5>
                        <p>
                            Email: info@example.com
                            <br />
                            Phone: 123-456-7890
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <p className="text-center">
                            &copy; {new Date().getFullYear()} Movie Ticket. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;