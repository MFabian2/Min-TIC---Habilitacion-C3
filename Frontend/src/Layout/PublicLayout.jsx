
import FooterPage from "../Components/Footer/FooterPage"
import Informacion_ventas from "../Components/modulos/Informacion_ventas"
import Navbars from "../Components/nav-bar/Navbars"


function PublicLayout({children}) {
    return (
        <div>
            este es mi PublicLayout
            {children}
            <Navbars/>
            <Informacion_ventas/> 
            <FooterPage/>
        </div>
    )
}

export default PublicLayout
