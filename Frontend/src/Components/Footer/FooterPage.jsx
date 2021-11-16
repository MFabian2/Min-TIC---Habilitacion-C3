import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './FooterPage.css'
const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">  Información</h5>
            <ul>          
              <li className="list-unstyled">
                <a href="#!">Quienes somos</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contactenos</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Mark's Shop </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;