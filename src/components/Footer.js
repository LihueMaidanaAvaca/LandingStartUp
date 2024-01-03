import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Contacto</h5>
                        <p>Dirección: 123 Calle Principal</p>
                        <p>Teléfono: +1 234 567 890</p>
                        <p>Email: contacto@ejemplo.com</p>
                    </Col>
                    <Col md={4}>
                        <h5>Enlaces Rápidos</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/about-us" className="text-white">Sobre Nosotros</Nav.Link>
                            <Nav.Link href="/courses" className="text-white">Cursos</Nav.Link>
                            <Nav.Link href="/contact" className="text-white">Contacto</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4}>
                        <h5>Síguenos</h5>
                        <Nav>
                            <Nav.Link href="https://www.facebook.com" className="text-white">
                                <i className="fab fa-facebook-f"></i>
                            </Nav.Link>
                            <Nav.Link href="https://www.twitter.com" className="text-white">
                                <i className="fab fa-twitter"></i>
                            </Nav.Link>
                            <Nav.Link href="https://www.instagram.com" className="text-white">
                                <i className="fab fa-instagram"></i>
                            </Nav.Link>
                            <Nav.Link href="https://www.linkedin.com" className="text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </Nav.Link>
                            {/* Agrega más iconos según sea necesario */}
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">
                        © 2023 Tu Compañía - Todos los derechos reservados
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
