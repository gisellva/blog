import React, { useRef } from 'react';
import './App.css';
import Areas from './Componets/Areas';
import Interests from './Componets/Interests';
import NavbarComponent from './Componets/NavbarComponent';
import Family from './Componets/Family';
import Hobbies from './Componets/Hobbies';
import Divider from '@mui/material/Divider';
import Job from './Componets/Job';
import Trips from './Componets/Trips';
import Events from './Componets/Events';
import CriticalThinking from './Componets/Critical';


function App() {
  const interestsRef = useRef(null);
  const familyRef = useRef(null);
  const hobbiesRef = useRef(null);
  const jobRef=useRef(null)
  const tripRef=useRef(null)
  const eventsRef=useRef(null)
  const criticalRef=useRef(null)

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <NavbarComponent />
      <Areas onScrollToInterests={() => scrollToRef(interestsRef)} />
      <Interests 
        interestsRef={interestsRef} 
        onScrollToFamily={() => scrollToRef(familyRef)} 
        onScrollToHobbies={() => scrollToRef(hobbiesRef)} 
        onScrollToJob={() => scrollToRef(jobRef)} 
        onScrollToTrip={() => scrollToRef(tripRef)} 
        onScrollToEvents={() => scrollToRef(eventsRef)} 
        onScrollToCritical={() => scrollToRef(criticalRef)} 
      />
      <Divider style={{ marginTop: '40px', color: '#f8bbd0' }}>Family</Divider>
      <Family ref={familyRef} />
      <Divider style={{ marginTop: '20px', color: '#f8bbd0' }}>Hobbies</Divider>
      <Hobbies ref={hobbiesRef} />
      <Divider style={{ marginTop: '20px', color: '#f8bbd0' }}>Job</Divider>
      <Job ref={jobRef}/>
      <Divider style={{ marginTop: '20px', color: '#f8bbd0' }}>Trips</Divider>
      <Trips ref={tripRef}/>
      <Divider style={{ marginTop: '20px', color: '#f8bbd0' }}>Current Events</Divider>
      <Events ref={eventsRef}/>
      <Divider style={{ marginTop: '20px', color: '#f8bbd0' }}>Current Events</Divider>
      <CriticalThinking ref={criticalRef}/>
    </div>
  );
}

export default App;
