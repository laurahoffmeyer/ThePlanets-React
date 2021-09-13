import './MainNav.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import planets from '../../planets';

const MainNav = (props) => {  
  return (
        <Navbar collapseOnSelect bg="transparent" variant="dark" expand="md">
          <Container fluid>
              <Navbar.Brand href='/'>THE PLANETS</Navbar.Brand>
              <Navbar.Toggle onClick={() => props.setMenuState(!props.menuState)} aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  {Object.entries(planets).map(([key, value]) => {
                  return <Nav.Link key={key}
                    className={`${key} ${props.planet === key ? 'active-link' : ''}`}          
                    href="#" onClick={() => {props.setPlanet(key); props.setMenuState(false)}}>
                      {key}
                    </Nav.Link>
                  })}
                </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default MainNav;