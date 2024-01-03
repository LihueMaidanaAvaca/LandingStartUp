import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-4">
            <Container>
                <Navbar.Brand href="#home" style={{ fontWeight: 'bold' }}>BudaiEdge</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="#pricing">Por Que Elegirnos</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}