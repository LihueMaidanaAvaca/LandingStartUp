import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import team from '../assets/starup.webp'
import '../css/aboutus.css'

const AboutUs = () => {
    return (
        <>
            <Container fluid className="about-us-section" style={{ backgroundColor: '#7abb3b', color: 'white' }}>
                <Container style={{ paddingTop: '30px' }}>
                    <Row>
                        <Col md={6} className="d-none d-md-block">
                        <Image src={team} alt="Descripción de la imagen" fluid style={{ borderRadius: '50%',overflow: 'hidden' }}/>
                        </Col>
                        <Col md={6} xs={12}>
                            <h1 className="text-md-center">Sobre nosotros </h1>
                            <div className="text-md-left">
                                <p>Cada uno de nuestros cursos lo guiará hacia una carrera específica. Las empresas no requieren solamente un graduado universitario; buscan empleados con habilidades específicas.</p>
                                <p>Con la explosión de las redes sociales, y la aparición de nuevos dispositivos como tabletas y teléfonos inteligentes, ha habido un aumento significativo en el uso de Internet. Como resultado, las empresas están expandiendo su personal de TI.</p>
                                <p>Además, muchas empresas emergentes están buscando activamente más programadores y diseñadores. La preocupación por la seguridad de los datos también continúa creciendo, lo que subraya la importancia de este campo.</p>
                                <p>El campo de las tecnologías de la información es amplio y diverso, abarcando áreas como la administración de bases de datos, el desarrollo web, el análisis de sistemas y la seguridad de la información.</p>
                                <p>Según el Departamento de Trabajo de los EE. UU., se estima que el crecimiento laboral en estas áreas será de un 53 por ciento para el año 2018. Además, se espera que los sueldos en muchos trabajos de TI aumenten entre un 4 y un 6 por ciento."</p>
                                </div>
                        </Col>

                        {/* Resto del contenido */}
                    </Row>
                </Container>
            </Container>
        </>
    );
};


export default AboutUs;
