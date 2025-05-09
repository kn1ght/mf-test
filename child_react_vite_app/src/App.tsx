import "./App.css";

type AppProps = {
  message?: string;
};

function App(props: AppProps) {
  const { message } = props;

  return (
    <>
      <div style={{ fontWeight: "bold" }}>child_react_vite_app</div>
      {message && <div>{message}</div>}
    </>
  );
}

export default App;
