import React from 'react'
import Navbars from '../Components/nav-bar/Navbars'
import PrivateRoutes from '../Components/PrivateRoutes/PrivateRoutes'

const PrivateLayout = ({children}) => {
    return (
        <div>
            <PrivateRoutes>
            este es mi PrivateLayout
            {children}
            <Navbars/>
            
            asd 
            </PrivateRoutes>
        </div>
    )
}

export default PrivateLayout
