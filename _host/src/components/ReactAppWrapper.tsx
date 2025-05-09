const ReactChildWebComponent = ({ message }: { message: string }) => {
  // @ts-expect-error
  return <child-react-vite-app message={message} />;
};

export default ReactChildWebComponent;
