import './AppContainer.css';
import PlanetDisplay from '../PlanetDisplay/PlanetDisplay';
import { usePlanet } from '../../hooks/usePlanet';
import { useState } from 'react';
import planets from '../../planets';
import Loading from '../Loading/Loading'
import MainNav from '../MainNav/MainNav';
import { useCurrentPlanet } from '../../hooks/useCurrentPlanet'

const AppContainer = () => {

  const [menuState, setMenuState] = useState(() => false);
  const {planet, setPlanet} = useCurrentPlanet(() => 'mercury');  
  const {data, loading, error} = usePlanet(planet);

  return (
    <div style={{'--color-planet': planets[planet]}} className="app">
      {loading && <Loading />}
      {data && (
      <>
        <MainNav planet={planet} setPlanet={setPlanet} menuState={menuState} setMenuState={setMenuState} />
        <PlanetDisplay planet={planet} planetInfo={data} menuState={menuState}></PlanetDisplay>
      </>)}
      {error && <pre>{JSON.stringify(error, null, "\t")}</pre>}
    </div>
  );
}

export default AppContainer;