import ReactDOM from "react-dom/client";
import VueAppWrapper from "./components/VueAppWrapper";

import "./index.css";
import { useState } from "react";

const App = () => {
  const [count, setCounter] = useState(0);

  return (
    <div className="text-xl p-4 mt-10 mx-auto max-w-6xl">
      <div>Name: host-app</div>
      <div>Framework: react-19</div>
      <div>count: {count}</div>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <VueAppWrapper count={count} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
