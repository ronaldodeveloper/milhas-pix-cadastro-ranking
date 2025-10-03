"use client";
import React, { useState } from 'react';
import './RadioButtonComponent.css'; // Arquivo CSS opcional

const RadioButtonComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="radio-group">
      <label className={`radio-label ${selectedOption === 'tudoazul' ? 'checked' : ''}`}>
        <input
          type="radio"
          value="tudoazul"
          checked={selectedOption === 'tudoazul'}
          onChange={handleChange}
        />
        TudoAzul
      </label>
      <label className={`radio-label ${selectedOption === 'smiles' ? 'checked' : ''}`}>
        <input
          type="radio"
          value="smiles"
          checked={selectedOption === 'smiles'}
          onChange={handleChange}
        />
        Smiles
      </label>
    </div>
  );
};

export default RadioButtonComponent;