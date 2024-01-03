import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import learn from '../assets/whyimgs/learning-720x400.jpg'
import sillycon from '../assets/whyimgs/GettyImages-954876578.webp';
import success from '../assets/whyimgs/image.webp';
import '../css/whyus.css'

const WhyUs = () => {
    return (
        <>
            <h2 className="text-center my-5">¿Por qué nosotros?</h2>
            <Container>

                <Row>
                    <Col md={4}>
                        <Card className="card-verde">
                            <Card.Img variant="top" src={learn} />
                            <Card.Body>
                                <Card.Title>Exceptional training methods </Card.Title>
                                <Card.Text>
                                    Our training methods and curriculum are developed for the industry, by the industry. With a flexible online schedule, live sessions, 1:1 mentorships, and 24/7 support, our program fits the busy schedules of those looking for a comprehensive learning experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-verde">
                            <Card.Img variant="top" src={sillycon} />
                            <Card.Body>
                                <Card.Title>Learn from industry experts </Card.Title>
                                <Card.Text>
                                    Your Instructors and Mentors teach and guide you through your journey at Masterschool until you find your first job. They offer you an insider’s perspective of the industry and lead 1:1 sessions. You can be sure that what you’re learning is exactly what you need to know to secure a job in the workforce today.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-verde">
                            <Card.Img variant="top" src={success} />
                            <Card.Body>
                                <Card.Title>We help get you hired </Card.Title>
                                <Card.Text>
                                    A team of dedicated individuals is working with you and behind the scenes with career coaching and advice, workshops, and networking opportunities. We help you stand out among the crowd and don’t stop until you are hired.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center mt-4">
                    <Button className="btn-custom" size="lg">Comienza tu carrera con nosotros</Button>
                </div>
            </Container>
        </>
    );
};

export default WhyUs;
