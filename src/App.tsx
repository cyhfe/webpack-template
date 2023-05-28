import { useEffect, useState } from "react";
import img from "./assets/img.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      app
      <img src={img} />
    </div>
  );
}

export default App;
