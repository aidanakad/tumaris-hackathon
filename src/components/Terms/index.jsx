import React from 'react';
import {Container, Card, Button, Table, Tab, Tabs, Row, Col} from 'react-bootstrap';
// import './style.scss'
import img from '../../assets/custom-3.svg'
import car from "../../assets/car.png";
import PageWrapper from "../../layout/PageWrapper";
function Terms() {
    return (
        <PageWrapper>
            <Container fluid className='profile-page'>
                <Container className='profile-container'>
                    <h1>Условия для получения гранта</h1>
                    <Card className='profile-card shadow-lg p-3 bg-white rounded'>
                        <Card.Body>
                            <Tabs
                                defaultActiveKey="debtor"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="debtor" title="Условия для заемщика">

                                    <Row className='d-flex justify-content-between mb-3'>
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className='mt-3'>
                                            <ul className='d-flex flex-column gap-3'>
                                                <li>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a
                                                </li><li>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </li><li>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </li><li>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a
                                                </li><li>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </li><li>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col xs sm md={6} lg={6} xl={6}>
                                            <img src={img} className='requirements-img'/>
                                        </Col>

                                    </Row>
                                </Tab>
                                <Tab eventKey="car" title="Условия для машины">
                                    <Row>

                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className='mt-3'>
                                            <ul className='d-flex flex-column gap-3'>
                                                <li>
                                                    Lorem ipsum dolor sit amet, consectetur adipiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a
                                                </li><li>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a
                                            </li><li>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            </li><li>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            </li><li>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            </li><li>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            </li>
                                            </ul>
                                        </Col>
                                        <Col xs sm md={6} lg={6} xl={6}>
                                            <img src={car} className='w-50'/>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Container>

            </Container>
        </PageWrapper>


    )
}

export default Terms