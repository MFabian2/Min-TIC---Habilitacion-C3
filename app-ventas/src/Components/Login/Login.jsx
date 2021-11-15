// import { useAuth0 } from '@auth0/auth0-react'
// import Button from '@restart/ui/esm/Button'
// import React, { useEffect, useState } from 'react'
// import { Form } from 'react-bootstrap'
// import './Login.css'
// const Login = () => {
//     const { loginWithRedirect, isAuthenticated, user, logout} = useAuth0();
//     const [textButton, setTextButton] = useState('Login')
//     const LoginButton = () => {

//         if(!isAuthenticated){
//             setTextButton('Login')
//             return loginWithRedirect()
//         }else{
//             setTextButton('logout')
//             return logout({returnTo: window.location.origin})
//         }
//       };

//       useEffect(() => {
//             if(isAuthenticated) {
//                 setTextButton("Logout")
//             }else{
//                 setTextButton( "Login")
//             }
//         }, [isAuthenticated])

//     return (
//       <div className="div-login">
//             <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//             </Form.Text>
//             </Form.Group>
        
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//             {
//                 isAuthenticated ?
//                 <button onClick={()=>logout ({ returnTo: window. location.origin} )} className="btn btn-primary"> {textButton} </button> :
//                 <button onClick={()=> loginWithRedirect()} className="btn btn-primary" href="/ventas"> {textButton} </button>
//             }
//             <Button class="btn btn-primary" variant="primary" type="submit" href="/ventas" >Ingresar</Button>
//         </Form>
//         </div>
//     )
// }

// export default Login
