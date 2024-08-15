import React, { useRef } from 'react';
import './App.css';
import Areas from './Componets/Areas';
import Interests from './Componets/Interests';
import NavbarComponent from './Componets/NavbarComponent';

function App() {
  const interestsRef = useRef(null);

  const scrollToInterests = () => {
    if (interestsRef.current) {
      interestsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <NavbarComponent />
      <Areas onScrollToInterests={scrollToInterests} />
      <Interests interestsRef={interestsRef} />
    </div>
  );
}

export default App;
