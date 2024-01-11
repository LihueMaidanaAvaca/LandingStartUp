import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Companies() {
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <Container >
                <h1 style={{padding:"5rem", fontFamily: "Salsa, cursive"}}>Nuestros Socios</h1>
                <Row>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/nvidia.com" alt="nvidia" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/twitter.com" alt="x" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/airbnb.com" alt="airbnb" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/waze.com" alt="waze" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/beatsbydre.com" alt="beat" className="img-fluid"style={{borderRadius: "20px"}} />
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/mcdonalds.com" alt="mcdonalds" className="img-fluid" style={{paddingBottom:"3rem", borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/adidas-group.com" alt="adidas" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/playstation.com" alt="play" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/nintendo.com" alt="nintendo" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/disneyplus.com" alt="disney+" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/hbo-maxla.com" alt="hbomax" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/amd.com" alt="amd" className="img-fluid" style={{paddingBottom:"3rem", borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/ray-ban.com" alt="ray-ban" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/starbucks.com" alt="starbucks" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/paypal.com" alt="pay pal" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/wendys.com" alt="wendy" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/cabify.com" alt="canify" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </Col>
                    <Col xs={6} md={4} lg={2}>
                        <img src="https://logo.clearbit.com/apple.com" alt="apple" className="img-fluid" style={{paddingBottom:"5rem", borderRadius: "20px"}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
