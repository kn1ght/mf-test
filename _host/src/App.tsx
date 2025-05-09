import ReactDOM from "react-dom/client";
import VueAppWrapper from "./components/VueAppWrapper";

import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host-app</div>
    <div>Framework: react-19</div>
    <div className="mt-8">
      <h2 className="text-2xl mb-4">Vue App:</h2>
      <VueAppWrapper />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
