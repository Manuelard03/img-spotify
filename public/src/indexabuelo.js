import * as components from "./components/indexpadre.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsulation, mode open means this is reachable for js on your web
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <my-banner></my-banner>
    <my-cards></my-cards>
    <my-plans></my-plans>
    `;
  }
}

customElements.define("app-container", AppContainer);