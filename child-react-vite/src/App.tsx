import "./App.css";

type AppProps = {
  message?: string;
};

function App(props: AppProps) {
  const { message } = props;

  return (
    <>
      <div>Name: child-react-vite-app</div>
      {message && <div>{message}</div>}
    </>
  );
}

export default App;
