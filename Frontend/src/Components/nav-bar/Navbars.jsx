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
            <Navbar.Brand href="/home">Marck's Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav className="me-auto">
                    <Nav.Link href="/ventas">Quienes somos</Nav.Link>
                    <Nav.Link href="#pricing">Contactenos</Nav.Link>
                    <Nav.Link href="#pricing">  </Nav.Link>
                    <Nav.Link href="#pricing">  </Nav.Link>
                    <Nav.Link href="#pricing">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Gestionar Productos</Nav.Link>
                    <Nav.Link href="#pricing">Ingresar Productos</Nav.Link>
                    <Nav.Link href="#pricing">Gestionar Ventas</Nav.Link>
                    <Nav.Link href="#pricing">Ingresar Ventas</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
            </Container>
            {
                isAuthenticated ?
                <NavDropdown title={Name} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/roles">Gestionar Usuarios</NavDropdown.Item>
                    <NavDropdown.Item href="#ventas">Crear Ususarios</NavDropdown.Item>
                    <NavDropdown.Item href="#dash">Eliminar Usuarios</NavDropdown.Item>
                    <NavDropdown.Item href="#dash">Gestionar Roles</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Configuración</NavDropdown.Item>
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
