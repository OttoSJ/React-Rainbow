import React, { useState } from "react";

function ColorForm({ addColor }) {
  let [input, setInput] = useState("");

  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <br />
        <button className="m-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ColorForm;
