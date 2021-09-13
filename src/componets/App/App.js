import AppContainer from '../AppContainer/AppContainer';
import React, { useState } from "react";

function App() {
  const [sessionId, setSessionId] = useState(1);

  return (
    <AppContainer key={sessionId} startNewGame={() => setSessionId(sessionId + 1)} />
  );
}

export default App;