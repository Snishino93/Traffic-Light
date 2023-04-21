import React, { useState } from 'react';

function TrafficLight() {
  const [color, setColor] = useState("red");
  const colors = ["red", "green", "yellow", "purple"];
  const [showPurple, setShowPurple] = useState(false);

  const handleClickChange = () => {
    let randomIndex;
    const availableColors = showPurple ? colors : colors.filter(col => col !== 'purple');
    
    do {
      randomIndex = Math.floor(Math.random() * availableColors.length);
    } while (availableColors[randomIndex] === color);
  
    setColor(availableColors[randomIndex]);
  };
  
  
  const handleClick = (col) => {
    setColor(col);
  };
  
  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === 'red' ? 'active' : ''}`}
        onClick={() => handleClick('red')}
      />
      <div
        className={`light yellow ${color === 'yellow' ? 'active' : ''}`}
        onClick={() => handleClick('yellow')}
      />
      <div
        className={`light green ${color === 'green' ? 'active' : ''}`}
        onClick={() => handleClick('green')}
      />
      <div
        className={`light purple ${color === 'purple' ? 'active' : ''} ${!showPurple ? 'hidden' : ''}`}
        onClick={() => handleClick('purple')}
      />
      <button onClick={() => setShowPurple(true)}>Añadir color púrpura</button>
      <button onClick={() => setShowPurple(false)}>Eliminar color púrpura</button>
      <button onClick={handleClickChange}>Cambiar color</button>
    </div>
  );
}

export default TrafficLight;
