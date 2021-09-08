import FactsDisplay from '../FactsDisplay/FactsDisplay';
import Stats from '../Stats/Stats';
import './PlanetDisplay.css';

function PlanetDisplay(props) {

  return (
    <div className="planetDisplay">
        <FactsDisplay planetInfo={props.planetInfo} menuState={props.menuState}></FactsDisplay>
        <Stats planetInfo={props.planetInfo}></Stats>
    </div>
  );
}

export default PlanetDisplay;