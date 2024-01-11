import React from 'react';
import { Accordion, Card, useAccordionButton, Container } from 'react-bootstrap';
import "../css/faq.css"

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('Totally custom!', eventKey),
    );

    return (
        <Card.Header
            onClick={decoratedOnClick}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </Card.Header>
    );
}

export default function Faq() {
    return (
        <>
            <Container>
                <h2 className="text-center my-4">FAQ</h2>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <CustomToggle eventKey="0">What if I don’t immediately want to start working after the program?</CustomToggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Our programs are designed for people who want to start looking for a new job immediately after they graduate. However, students who may need some more time after graduation before they start looking for a job, can reach out to our team. We will consider your unique situation and try to help.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <CustomToggle eventKey="1">Does it make sense to join if I’m already a Computer Science student or graduate? </CustomToggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Yes. Many of our students are computer science graduates or graduates of similar degrees. The Masterschool program, in contrast to traditional degree programs, focuses on hands-on job training and skills: what you actually need to get a job in tech.
                                Masterschool bridges the gap between education and the job market. Through our Instructors and Mentors, who are industry experts in their field, and our Career Accelerator program, which includes partnerships with leading companies and employers, we do everything in our power to make sure you are equipped with exactly what the market needs.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <CustomToggle eventKey="2">Are the programs online or in-person? </CustomToggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Our programs are all 100% online and we host live classes and events each week, but they are recorded, which allows our students to learn flexibly on their own time throughout the week. Students can join live or watch them later at their convenience.
                                There’s hundreds of hours of self-learning content with access to the world’s leading training platforms, so you can learn more and dig deeper into lessons as you like and at your pace.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <CustomToggle eventKey="3">Do I need an academic degree or prior knowledge to apply? </CustomToggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                No. No prior knowledge in a particular field of study is required to apply. We’ve learned that this is not necessarily the best indicator of success and instead we look for candidates who are motivated, with grit, determination, and aptitude, regardless of previous knowledge or experience. However, in order to excel in Masterschool’s programs, you will need basic computer literacy skills, and at least a high school level of mathematics, be comfortable learning in English and be comfortable working in a digital environment with technical tools and with numbers.                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <CustomToggle eventKey="4">Will you help me find a job? </CustomToggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                We do everything necessary to help you find a job. While we will help you find job opportunities and network, we will not place you in a job.
                                The career support includes workshops, personal mentorship, global hiring partners, which include the world’s best tech companies, and much more.
                                Even after you’re hired, we will continue to support you. If you need help with finding a new job, a salary negotiation, asking for a promotion or anything else, we are here to help you. Our ultimate goal is that you continue to succeed beyond your first job in tech, and we see ourselves as long term partners.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <CustomToggle eventKey="5">Are the studies held entirely in English? </CustomToggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>
                            Yes, all of the content is in English. This includes the live classes, our virtual Campus and learning platforms, and the 1:1 guidance you’ll receive from our team.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <CustomToggle eventKey="6">Will I be able to work during the program? </CustomToggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                            Yes, Masterschool’s programs allow you to study the material flexibly and manage your own schedule. We highly recommend watching the live classes on a regular basis to help you stay on track with your training. In terms of time commitment, successful students put about 15-20 hours into the program each week. Learn more about that here.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    {/* Repite el Card para cada pregunta */}
                    {/* ... */}
                </Accordion>
            </Container>
        </>
    )
}