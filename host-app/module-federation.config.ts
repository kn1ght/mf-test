export const mfConfig = {
  name: "host_app",
  exposes: {},
  remotes: {
    child_app: "child_app@http://localhost:3001/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
