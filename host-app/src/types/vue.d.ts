declare module "child_app/VueApp" {
  const VueApp: any;
  export default VueApp;
}

interface HTMLDivElement {
  _vue?: {
    unmount: () => void;
  };
}
