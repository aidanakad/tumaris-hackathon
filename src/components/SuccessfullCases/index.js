import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './style.scss'
import placeholder from '../../assets/placeholder.png'

function SuccessfulCases({ data}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title>{data?.name}</Card.Title>
                    <Card.Text>
                        {data?.review}
                    </Card.Text>
                    <Button variant="link">Read more...</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SuccessfulCases