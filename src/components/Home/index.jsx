import React from 'react';
import {Container, Card, Col, Row, Button} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../layout/PageWrapper";
import {useNavigate} from "react-router";
import SuccessfulCases from "../SuccessfullCases";
import {successfulCase} from "../../utils/mocked-review";

function Home() {
    const navigate = useNavigate()
    return (
        <PageWrapper>
            <Container fluid className='main-bg'>
                <div className='main-info d-flex flex-column'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='d-flex gap-3'>
                        <Button variant="success" onClick={()=> navigate('/application')}>Подать заявку</Button>
                        <Button variant="outline-primary" onClick={()=> navigate('/terms')}>Подробнее</Button>
                    </div>
                </div>
            </Container>
            <Container className='main-cases'>
                <h3 className='m-5 text-center border-light'> Успешные кейсы</h3>
                <div className='d-flex gap-3 justify-content-center '>
                    {successfulCase.map((data)=>(
                        <SuccessfulCases data={data}/>
                    ))}
                </div>
            </Container>
        </PageWrapper>


    )
}

export default Home