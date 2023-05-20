import * as React from "react";
import { createRoot } from "react-dom/client";
import img from "./assets/img.png";

import "./style.css";

function App() {
  return (
    <div>
      app
      <img
        src={img}
        alt=""
        style={{
          width: "100px",
        }}
      />
    </div>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
