import React, {useState} from 'react';
import {Container, Card, Col, Row, Button, Form, Collapse, Modal} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../layout/PageWrapper";
import {useNavigate} from "react-router";
import MyInput from "../Input";

function Application() {
    const [open, setOpen] = useState(0);
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

        <PageWrapper>
            <Container fluid className='profile-bg mt-5'>
                <Container className='profile-container' >
                    <h1>Заявление</h1>
                    <div className='d-flex flex-column gap-3'>
                        <Card className='profile-card shadow-lg p-3 bg-white rounded' onClick={() => setOpen(0)}>
                            <Card.Body>
                                <Form>
                                    <h5 className='fw-bold'>Паспортные данные</h5>
                                    <Collapse in={open === 0} >
                                        <Container>
                                            <Row >
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Имя'} placeholder={'Введите имя'}/>
                                                    <MyInput text={'Номер Паспота'} placeholder={'Введите номер паспорта'} />
                                                    <MyInput text={'Дата Рождения'} placeholder={'Введите дату рождения'} type={'date'}/>
                                                    <MyInput text={'Кем выдан'} placeholder={'Введите кем выдан'}/>
                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Фамилия'} placeholder={'Введите фамилию '}/>
                                                    <MyInput text={'ИНН'} placeholder={"Введите свой ИНН"}/>
                                                    <MyInput text={'Дата выдачи'} placeholder={"Введите дату выдачи"}type={'date'}/>
                                                    <MyInput text={'Дата истечение'} placeholder={"Введите дату истечения"}type={'date'}/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Collapse>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className='profile-card shadow-lg p-3 bg-white rounded' onClick={() => setOpen(1)}>
                            <Card.Body>
                                <Form>
                                    <h5 className='fw-bold'>Личная информация</h5>
                                    <Collapse in={open === 1} >
                                        <Container>
                                            <Row >
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Имя'} placeholder={'Введите имя'}/>
                                                    <MyInput text={'Фамилия'} placeholder={'Введите фамилию '}/>
                                                    <MyInput text={'Дата Рождения'} placeholder={'Введите дату рождения'}/>
                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Номер Паспота'} placeholder={'Введите номер паспорта'} type={'date'}/>
                                                    <MyInput text={'ИНН'} placeholder={"Введите свой ИНН"}/>
                                                    <MyInput text={'Почта'} placeholder={"Введите свою почту"}/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Collapse>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className='profile-card shadow-lg p-3 bg-white rounded' onClick={() => setOpen(2)}>
                            <Card.Body>
                                <Form>
                                    <h5 className='fw-bold'>Информация о кредите</h5>
                                    <Collapse in={open === 2} >
                                        <Container>
                                            <Row >
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Имя'} placeholder={'Введите имя'}/>
                                                    <MyInput text={'Фамилия'} placeholder={'Введите фамилию '}/>
                                                    <MyInput text={'Дата Рождения'} placeholder={'Введите дату рождения'}/>
                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Номер Паспота'} placeholder={'Введите номер паспорта'} type={'date'}/>
                                                    <MyInput text={'ИНН'} placeholder={"Введите свой ИНН"}/>
                                                    <MyInput text={'Почта'} placeholder={"Введите свою почту"}/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Collapse>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className='profile-card shadow-lg p-3 bg-white rounded' onClick={() => setOpen(3)}>
                            <Card.Body>
                                <Form>
                                    <h5 className='fw-bold'>Информация о поручителе</h5>
                                    <Collapse in={open === 3} >
                                        <Container>
                                            <Row >
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Имя'} placeholder={'Введите имя'}/>
                                                    <MyInput text={'Фамилия'} placeholder={'Введите фамилию '}/>
                                                    <MyInput text={'Дата Рождения'} placeholder={'Введите дату рождения'}/>
                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Номер Паспота'} placeholder={'Введите номер паспорта'} type={'date'}/>
                                                    <MyInput text={'ИНН'} placeholder={"Введите свой ИНН"}/>
                                                    <MyInput text={'Почта'} placeholder={"Введите свою почту"}/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Collapse>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className='profile-card shadow-lg p-3 bg-white rounded' onClick={() => setOpen(4)}>
                            <Card.Body>
                                <Form>
                                    <h5 className='fw-bold'>Загрузка документов</h5>
                                    <Collapse in={open === 4} >
                                        <Container>
                                            <Row >
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Имя'} placeholder={'Введите имя'}/>
                                                    <MyInput text={'Фамилия'} placeholder={'Введите фамилию '}/>
                                                    <MyInput text={'Дата Рождения'} placeholder={'Введите дату рождения'}/>
                                                </Col>
                                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    <MyInput text={'Номер Паспота'} placeholder={'Введите номер паспорта'} type={'date'}/>
                                                    <MyInput text={'ИНН'} placeholder={"Введите свой ИНН"}/>
                                                    <MyInput text={'Почта'} placeholder={"Введите свою почту"}/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Collapse>
                                </Form>
                            </Card.Body>
                        </Card>

                    </div>

                    <div className='d-flex justify-content-end mb-5'>
                        <Button variant={'success'} className='btn-profile mt-3' onClick={handleShow} >
                            Отправить на рассмотрение
                        </Button>
                    </div>
                </Container>
            </Container>
        </PageWrapper>
            <Modal show={show} onHide={handleClose} centered>
                <div className="d-flex justify-content-end my-2 mx-2">
                    {/*<Clear onClick={() => handleClose()}/>*/}
                </div>
                <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="modalTop">Ваша заявка принята!</h3>
                    <div className="modalBody p-3">
                        Вы можете проверить статус своей заявки в своем личном кабинете.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={()=> navigate('/profile')}>Перейти</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}

export default Application