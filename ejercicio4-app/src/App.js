import React from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import { ThemeProvider } from "./components/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Comp1 />
        <Comp2 />
      </div>
    </ThemeProvider>
  );
}

export default App;
