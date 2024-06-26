import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Address from './components/payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Address />
      </div>
    </Router>
  );
}

export default App;
