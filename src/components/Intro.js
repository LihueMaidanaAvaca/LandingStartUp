import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Row, Col } from 'react-bootstrap';
import '../css/intro.css'

export default function Intro() {
    const introText = useRef(null);

    useEffect(() => {
        const element = introText.current;
        gsap.set(element, { autoAlpha: 1 }); // Asegurarse de que el texto es visible antes de animar
        gsap.fromTo(
            element,
            { width: "0" },
            { duration: 2, width: "100%", ease: "steps(30)" } // Simula efecto de escritura
        );
    }, []);

    return (
        <div style={{
            // height: "70vh",
            background: "#7abb3b"
        }}>
            <h1 style={{ fontSize: '5rem', fontWeight: 'bold', fontFamily: "'Merriweather', serif", marginLeft: '4rem', paddingTop: '4rem' }}>
                Tech Global Talent
            </h1>
            <Row id="este">

                <Col style={{ overflow: "hidden" }}>
                    <h2 style={{ display: "inline-block", paddingTop: '5rem', paddingLeft: '3rem', paddingBottom: '3rem' }}>
                        TGT ofrece a jóvenes latinoamericanos una oportunidad de exposición práctica a la tecnología internacional mediante pasantías en proyectos reales, orientado a aquellos que aspiran a una carrera profesional en campos de nuevas tecnologías emergentes.
                    </h2>
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div class="buttons-container">
                        <button class="button-arounder">Comienza Ahora</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
