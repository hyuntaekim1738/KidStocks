// App.js
import React, { useState } from 'react';
import Home from './components/Home'; // Import your Home component
import Shack from './components/Shack'; // Import your Shack component

const App = () => {
  const [isShackVisible, setShackVisible] = useState(false);

  const toggleShack = () => {
    setShackVisible(!isShackVisible);
  };

  return (
    <React.Fragment>
      {isShackVisible ? (
        <Shack onClose={() => setShackVisible(false)} />
      ) : (
        <Home onShackPress={toggleShack} />
      )}
    </React.Fragment>
  );
};

export default App;



