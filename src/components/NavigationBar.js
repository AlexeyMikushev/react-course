import {React} from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../App.css';
import logo from '../img.svg'

function NavigationBar() {

  return (
    <Navbar className="NavigationBar">
        <Nav className="mr-auto">
          <LinkContainer to="/" className="homeButton">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/" className="homeButton">
          <img src={logo} alt ={"logo"} className="App-logo"/>
          </LinkContainer>
          <LinkContainer to="/about" className="aboutButton">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
  );
}
export default NavigationBar;
