import ReactDOM from "react-dom/client";
import VueAppWrapper from "./components/VueAppWrapper";
import "child_react_vite_app/App";

import "./index.css";
import { useState } from "react";
import ReactChildWebComponent from "./components/ReactAppWrapper";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-xl p-4 mt-10 mx-auto max-w-6xl">
      <div>Name: host-app</div>
      <div>Framework: react-19</div>
      <div>count: {count}</div>
      <div className="flex gap-2">
        <button
          className="bg-gray-700 text-white rounded-lg py-1 px-4 cursor-pointer"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <button
          className="bg-gray-700 text-white rounded-lg py-1 px-4 cursor-pointer"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <VueAppWrapper count={count} />
      <div className="border p-4 mt-10">
        <ReactChildWebComponent
          message={`Hello from host app, count: ${count}`}
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
