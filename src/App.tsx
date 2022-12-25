import { useState } from "react";
import { codeItems } from "./code";

function App() {
  const [txt, setTxt] = useState("");
  const [idx, setIdx] = useState(0);

  function handleChange() {
    let current = codeItems[idx];
    setIdx((i) => (i === codeItems.length ? 0 : i + 1));
    setTxt((old) => `${old} ${current}`);
  }

  return (
    <div className="App">
      <div className="code">
        {txt}
        <span>&#9608;</span>
      </div>
      <input type="text" name="code-input" id="code-input" onChange={handleChange} />
    </div>
  );
}

export default App;
