import ReactDOM from "react-dom/client";
import App from "./App";

class ChildReactElement extends HTMLElement {
  root: ReactDOM.Root | null = null;
  mountPoint: HTMLDivElement | null = null;

  static get observedAttributes() {
    return ["message"];
  }

  connectedCallback() {
    this.mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(this.mountPoint);

    this.root = ReactDOM.createRoot(this.mountPoint);
    this.renderReactApp();
  }

  attributeChangedCallback() {
    this.renderReactApp(); // Re-render on prop change
  }

  renderReactApp() {
    if (!this.root) return;

    const message = this.getAttribute("message") || "";
    this.root.render(<App message={message} />);
  }

  disconnectedCallback() {
    this.root?.unmount();
  }
}

customElements.define("child-react-vite-app", ChildReactElement);
