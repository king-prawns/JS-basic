class SecondElement extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count++;
    this.innerHTML = this.template();
  }

  template() {
    return `
      <div>
        <span>Clicked ${this.count} times</span>
      </div>
    `;
  }
  connectedCallback() {
    this.innerHTML = this.template();
  }
}
window.customElements.define("second-element", SecondElement);
