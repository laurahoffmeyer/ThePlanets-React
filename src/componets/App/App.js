import './App.css';
import PlanetDisplay from '../PlanetDisplay/PlanetDisplay';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { usePlanet } from '../../hooks/usePlanet';
import { useEffect, useState } from 'react';
import planets from '../../planets';
import Loading from '../Loading/Loading'

function App() {
  const [menuState, setMenuState] = useState(() => false);
  const [planet, setPlanet] = useState(() => localStorage.getItem('planet') ?? 'mercury');

  useEffect(() => {
    localStorage.setItem('planet', planet)
  }, [planet])

  const {data, loading, error} = usePlanet(planet);

  return (
    <div style={{'--color-planet': planets[planet]}} className="app">
      {loading && <Loading />}
      {data && (
      <>
        <Navbar collapseOnSelect bg="transparent" variant="dark" expand="md">
          <Container fluid>
              <Navbar.Brand href='/'>THE PLANETS</Navbar.Brand>
              <Navbar.Toggle onClick={() => setMenuState(!menuState)} aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  {Object.entries(planets).map(([key, value]) => {
                  return <Nav.Link key={key}
                    className={`${key} ${planet === key ? 'active-link' : ''}`}          
                    href="#" onClick={() => {setPlanet(key); setMenuState(false)}}>
                      {key}
                    </Nav.Link>
                  })}
                </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        <PlanetDisplay planetInfo={data} menuState={menuState}></PlanetDisplay>
      </>)}
      {error && <pre>{JSON.stringify(error, null, "\t")}</pre>}
    </div>
  );
}

export default App;