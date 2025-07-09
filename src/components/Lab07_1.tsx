import { useState } from "react";

const Lab07_01 = () => {
  const [car, setCar] = useState("Mercedes");
  const [color, setColor] = useState("Black");

  const cars = ["mercedes", "volvo", "saab", "audi"];
  const colors = ["black", "blue", "red", "white"];

  return (
    <div>
      <h1>Select your car</h1>

      <div>
        <label htmlFor="cars">Choose a car:</label>
        <select id="cars" value={car} onChange={(e) => setCar(e.target.value)}>
          <option value={cars[0]}>Mercedes</option>
          {cars.map((c) => (
            <option key={c} value={c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="colors">Choose a color:</label>
        <select
          id="colors"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value={colors[0]}>Black</option>
          {colors.map((col) => (
            <option key={col} value={col}>
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <h4>
        You selected:{" "}
        {car && color
          ? `${car.charAt(0).toUpperCase() + car.slice(1)} - ${
              color.charAt(0).toUpperCase() + color.slice(1)
            }`
          : "None"}
      </h4>
    </div>
  );
};

export default Lab07_01;
