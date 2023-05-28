import { useEffect, useState } from "react";
import img from "./assets/img.png";
import { add } from "lodash-es";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      app
      <img src={img} width={300} alt="sa" />
      <div>{add(1, 2)}</div>
    </div>
  );
}

export default App;
