import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import ai from '../assets/ai.jpg';
import robotica from '../assets/robotica.jpg';
import solarpanel from '../assets/solarpanel.jpg';
import developers from '../assets/developers.jpg'

export default function Carrusel(props) {
    return (
        <Carousel id={props.id}>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={ai}
                    alt="Primer slide"
                    style={{ height: '70vh', objectFit: 'cover', filter: 'brightness(65%)' }}
                />
                <Carousel.Caption>
                    <h1>Inteligencia Artificial: Transformando el Futuro con IA</h1>
                    <p>Descubre cómo la Inteligencia Artificial está remodelando nuestro mundo en este curso interactivo. Desde algoritmos de aprendizaje automático hasta aplicaciones prácticas de IA en distintos sectores, te sumergirás en los conceptos fundamentales y las tecnologías avanzadas que están definiendo el futuro. Este curso está diseñado para proporcionarte una comprensión profunda y habilidades prácticas en IA, preparándote para ser parte de la próxima revolución tecnológica.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={solarpanel}
                    alt="Segundo slide"
                    style={{ height: '70vh', objectFit: 'cover', filter: 'brightness(65%)' }}
                />
                <Carousel.Caption>
                    <h1>Experto en Instalación de Paneles Solares: Energía Limpia para el Futuro</h1>
                    <p>Sumérgete en el mundo de las energías renovables con nuestro curso intensivo de Instalación de Paneles Solares. Aprende las habilidades prácticas y teóricas necesarias para convertirte en un experto en la instalación y mantenimiento de sistemas solares. Este curso no solo cubre los aspectos técnicos, sino que también enfatiza la importancia de la sostenibilidad y la eficiencia energética. Al finalizar, estarás equipado con el conocimiento y la experiencia para liderar la transición hacia una energía más limpia y sostenible.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={robotica}
                    alt="Tercer slide"
                    style={{ height: '70vh', objectFit: 'cover', filter: 'brightness(65%)' }}
                />
                <Carousel.Caption>
                    <h1>Robótica: Diseñando el Futuro con Tecnología Innovadora</h1>
                    <p>Explora el fascinante campo de la robótica, donde la ingeniería y la innovación se encuentran. Este curso te llevará a través de los principios fundamentales de diseño, programación y operación de robots. Aprenderás sobre sistemas de control, sensores, y actuadores, y cómo aplicar estos conocimientos en proyectos prácticos y desafiantes. Prepárate para adentrarte en un campo que está revolucionando industrias, desde la manufactura avanzada hasta la exploración espacial.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={developers}
                    alt="Cuarto slide"
                    style={{ height: '70vh', objectFit: 'cover', filter: 'brightness(65%)' }}
                />
                <Carousel.Caption>
                    <div>

                    <h1>Dominio del Código: Programación para el Mundo Moderno</h1>
                    <p>Entra en el mundo del desarrollo de software con nuestro curso integral de Programación. Ya sea que estés comenzando desde cero o buscando mejorar tus habilidades, este curso te proporcionará una base sólida en lenguajes de programación clave, desarrollo web y móvil, y solución de problemas computacionales. A través de un enfoque práctico, aprenderás a crear aplicaciones reales y a resolver problemas del mundo real, equipándote con las habilidades necesarias para tener éxito en la industria tecnológica en constante evolución.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Puedes agregar más elementos del carrusel aquí */}
        </Carousel>
    )
}