import './Loading.css';
import Lottie from "lottie-react";
import loadingJSON from '../../img/loading3.json';
import Container from 'react-bootstrap/esm/Container';

const Loading = () => {

  return (
    <Container className="loading">
        <Lottie
        loop
        autoplay
        animationData={loadingJSON}
        className='animation'
      />
    </Container>
  );
}

export default Loading;