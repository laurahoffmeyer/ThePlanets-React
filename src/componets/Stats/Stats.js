import './Stats.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Stats(props) {
  return (
    <Container className="stats">
      <Row>
          <Col className="stat-col" md={3}>
            <div className="stat-item">
              <span>ROTATION TIME</span>
              <h4>
                {Math.abs(props.planetInfo.sideralRotation) > 25
                    ? (Math.abs(props.planetInfo.sideralRotation) / 24).toFixed(2) + " days"
                    : Math.abs(props.planetInfo.sideralRotation).toFixed(2) + " hours"}
              </h4>
            </div>
          </Col>
          <Col className="stat-col" md={3}>
            <div className="stat-item">
              <span>REVOLUTION TIME</span>
              <h4>
                {Math.abs(props.planetInfo.sideralOrbit) > 366
                    ? (Math.abs(props.planetInfo.sideralOrbit) / 365).toFixed(2) + " years"
                    : Math.abs(props.planetInfo.sideralOrbit).toFixed(2) + " days"}
              </h4>
            </div>
          </Col>
          <Col className="stat-col" md={3}>
            <div className="stat-item">
              <span>RADIUS</span>
              <h4>{(props.planetInfo.equaRadius * 0.621371).toFixed(2)} mi</h4>
            </div>
          </Col>
          <Col className="stat-col" md={3}>
            <div className="stat-item">
              <span>AVERAGE TEMP.</span>
              <h4>{(((props.planetInfo.avgTemp - 273.15) * 9/5) + 32).toFixed(2)} <sup>º</sup>F</h4>
            </div>
          </Col>
      </Row>
    </Container>
  );
}

export default Stats;