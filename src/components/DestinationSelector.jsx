import React from "react";

const DestinationSelector = ({ options, selected, onSelect }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="destination">Choose a destination: </label>
      <select
        id="destination"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;