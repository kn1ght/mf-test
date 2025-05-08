export const mfConfig = {
  name: "child_app",
  filename: "remoteEntry.js",
  exposes: {
    "./VueApp": "./src/App.vue",
  },
  shared: ["vue"],
};
