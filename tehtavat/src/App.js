import React from 'react';
import TextCard from './tehtava1/TextCard';
import AnyCard from './tehtava2/AnyCard';
import StopWatch from './tehtava3/StopWatch';
import TemperatureMeter from './tehtava4/TemperatureMeter';

function App() {
  const assignmentStyle = { color: "#4d4259", backgroundImage: "linear-gradient(to bottom right, #ff9a00, #f5efb0)", borderRadius: "2rem", margin: "2rem", padding: "1rem" };
  return (
    <div>
      <div style={assignmentStyle}>
        <h3>TEHTÄVÄ 1</h3>
        <TextCard title="Ensimmäinen kortti" content="Ensimmäisen kortin sisältö" />
        <TextCard title="Toinen kortti" content="Sisältö jatkuu mielivaltaisena" />
        <TextCard title="Kolmas ja viimeinen kortti" content="Viimeisen kortin sisältö" />
      </div>
      <div style={assignmentStyle}>
        <h3>TEHTÄVÄ 2</h3>
        <AnyCard title="Children kortti">
          <ul>
            <li>Ensimmäinen rivi</li>
            <li>Toinen rivi</li>
            <li>Viimeinen rivi</li>
          </ul>
        </AnyCard>
        <AnyCard title="Toinen children kortti">
          <p>Toisen Any-kortin sisältö</p>
        </AnyCard>
      </div>
      <div style={assignmentStyle}>
        <h3>TEHTÄVÄ 3</h3>
        <StopWatch />
      </div>
      <div style={assignmentStyle}>
        <h3>TEHTÄVÄ 4</h3>
        <TemperatureMeter />
      </div>
    </div>
  );
}

export default App;
