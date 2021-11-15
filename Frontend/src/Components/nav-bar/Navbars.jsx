import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Navbars = () => {
    const { loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();
    const [textButton, setTextButton] = useState('Login')
    const [Name, setName] = useState('')
      useEffect(() => {
            if(isAuthenticated) {
                setTextButton("Logout")
                setName(user.name) 
            }else{
                setTextButton( "Login")
            }
        }, [isAuthenticated])

        useEffect(() => {
            const getToken = async () => {
                const accesToken = await getAccessTokenSilently()
                localStorage.setItem('token', accesToken)
            }
            
            if(isAuthenticated){
                getToken()
            }

        }, [isAuthenticated, getAccessTokenSilently])
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img src="../../public/logo512.png" alt="" />
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/ventas">Ventas</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            {
                isAuthenticated ?
                <NavDropdown title={Name} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#dash">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="/roles">Roles</NavDropdown.Item>
                    <NavDropdown.Item href="#ventas">Ventas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>:
                null
            }
            {
                isAuthenticated ?
                <button onClick={()=>logout ({ returnTo: window. location.origin} )} className="btn btn-primary"> {textButton} </button> :
                <button onClick={()=> loginWithRedirect()} className="btn btn-primary" href="/ventas"> {textButton} </button>
            }
    </Navbar>
    )
}

export default Navbars
