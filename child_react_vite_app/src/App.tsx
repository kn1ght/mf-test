import { useState } from "react";
import StylesWrapper from "./StylesWrapper";

type AppProps = {
  message?: string;
};

function App(props: AppProps) {
  const { message } = props;
  const [count, setCount] = useState(0);

  return (
    <StylesWrapper>
      <div style={{ fontWeight: "bold" }}>child_react_vite_app</div>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <div>internal count: {count}</div>
      {message && <div>{message}</div>}
    </StylesWrapper>
  );
}

export default App;
