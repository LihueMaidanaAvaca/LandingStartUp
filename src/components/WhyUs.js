import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import learn from '../assets/whyimgs/learning-720x400.jpg'
import sillycon from '../assets/whyimgs/GettyImages-954876578.webp';
import success from '../assets/whyimgs/image.webp';
import '../css/whyus.css'

export default function WhyUs (props) {
    return (
        <div id={props.id} style={{padding: '70px'}}>
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
                                Your instructors and mentors at Masterschool will guide and teach you until you land your first job, providing an insider's view of the industry and personalized sessions. You'll receive relevant and practical training to secure a job in today's job market.
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
        </div>
    );
};
