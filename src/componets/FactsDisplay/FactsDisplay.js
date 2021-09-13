import './FactsDisplay.css';
import { useState } from 'react';
import { BiLinkExternal } from "react-icons/bi";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useWikiData } from '../../hooks/useWiki';
import Loading from '../Loading/Loading'

function FactsMenu(props) {

  const [layer, setLayer] = useState('');
  let currentPlanet = props.planet ? props.planet.toLowerCase() : '';
  const {overview, pageURL, loading, error} = useWikiData(currentPlanet);

  return (
    <>
    {loading && <Loading />}
    {overview && (
      <Container className="facts">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={12} lg={7} className={`d-flex justify-content-center ${layer === '3' && currentPlanet === 'saturn' ? 'saturn3' : ''}`}>
            <img className={currentPlanet === 'saturn' ? 'saturn-img' : ''} alt='Planet' src={`../../img/${currentPlanet + layer}.png`} />
          </Col>
          <Col xs="auto" md={12} lg={5} className="planet-info">
            <div className='planet-description'>
              <h1>{props.planetInfo.englishName}</h1>
              <p>{overview ? overview.toString() : ''}</p>
              <p className="wiki"><span>Source :</span> <a rel='noreferrer' target='_blank' href={pageURL}>Wikipedia</a> <BiLinkExternal /></p>
            </div>
            <ul className={`subMenu ${props.menuState ? 'active-menu' : ''}`}>
              <li className={layer === '' ? 'active-btn' : ''} onClick={() => setLayer('')}><p>OVERVIEW</p></li>
              <li className={layer === '2' ? 'active-btn' : ''} onClick={() => setLayer('2')}><p>STRUCTURE</p></li>
              <li className={layer === '3' ? 'active-btn' : ''} onClick={() => setLayer('3')}><p>SURFACE</p></li>
            </ul>
          </Col>
        </Row>
      </Container>)}
      {error && <pre>{JSON.stringify(error, null, "\t")}</pre>}
    </>
  );
}

export default FactsMenu;