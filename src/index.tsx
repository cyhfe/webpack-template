import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <div>app</div>;
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
