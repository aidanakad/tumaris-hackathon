import React from 'react';
import {Container, Card, Button, Table} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../layout/PageWrapper";

function Profile() {
    return (
        <PageWrapper>
            <Container fluid className='profile-page my-bg'>
                <Container className='profile-container'>
                    <h1>Статус заявки</h1>
                    <Card className='profile-card shadow-lg p-3 bg-white rounded'>
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>ФИО</th>
                                    <th>Сумма кредита</th>
                                    <th>Статус</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Алимов Аскар</td>
                                    <td>500 000 с.</td>
                                    <td>
                                        <Button variant='warning' disabled className='ml-2'>В обработке</Button>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Container>

            </Container>
        </PageWrapper>


    )
}

export default Profile