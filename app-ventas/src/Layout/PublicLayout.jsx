import Navbars from "../Components/nav-bar/Navbars"


function PublicLayout({children}) {
    return (
        <div>
            este es mi PublicLayout
            {children}
            <Navbars/>
        </div>
    )
}

export default PublicLayout
