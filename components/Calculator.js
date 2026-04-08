import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleCalculate = () => {
    try {
      // Evaluating the mathematical string directly
      const result = eval(display);
      setDisplay(String(result));
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div style={{maxWidth: "300px", margin: "50px auto", textAlign: "center", fontFamily: "sans-serif"}}>
      <h2>Calculator</h2>
      {/* data-cy attribute added to easily target the input in Cypress */}
      <input 
        type="text"
        value={display}
        readOnly
        data-cy="display"
        style={{
          width: "100%",
          height: "40px",
          fontSize: "24px",
          textAlign: "right",
          marginBottom: "15px",
        }}
      />

      <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px",}}>
        {["7", "8", "9", "/"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)} style={{ padding: "15px", fontSize: "18px" }}> {btn} </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)} style={{ padding: "15px", fontSize: "18px" }}> {btn} </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)} style={{ padding: "15px", fontSize: "18px" }}> {btn}</button>
        ))}
        {["0", "C", "=", "+"].map((btn) => (
          <button key={btn} onClick={() => {
                if (btn === "C") handleClear();
                else if (btn === "=") handleCalculate();
                else handleButtonClick(btn);
            }}
            style={{ padding: "15px", fontSize: "18px" }}
          >
            {btn}
          </button>
        ))}
        {['0', 'C', '=', '+', 'E'].map(btn => (
          <button
            key={btn}
            onClick={() => {
              if (btn === 'C') handleClear();
              else if (btn === '=') handleCalculate();
              else handleButtonClick(btn);
            }}
            style={{ padding: '15px', fontSize: '18px' }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
