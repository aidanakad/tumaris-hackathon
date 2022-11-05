import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import './style.scss'
// import logo from '../../assets/logo_patent.png'
import {NavLink} from "react-router-dom";

function Menu() {
    const navItems = [
        { id: 0, to: '/', text: 'О нас' },
        { id: 1, to: '/application', text: 'Подать заявку' },
        { id: 2, to: '/terms', text: 'Условия' },
    ]
    return (
        <div >
            <Navbar bg="light" expand="lg" fixed="top" className='shadow-lg p-3 bg-white rounded d-flex justify-content-around'>
                <Container className=''>
                    <Navbar.Brand href="#home">
                        {/*<img src={logo} className='nav-logo'/>*/}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-between'>
                        <Nav className="ml-a ">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <NavLink
                                            // activeClassName={styles.active}
                                            className='navLink'
                                            to={item.to}
                                        >
                                            {item.text}
                                        </NavLink>
                                    </li>
                                ))}
                        </Nav>
                        <Nav className="ml-a ">
                            <li>
                                <NavLink to={'/profile'} className='navLink '>Профиль</NavLink>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    )
}

export default Menu
