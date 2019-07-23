class FirstElement extends HTMLElement {
  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super();

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener("click", e => {
      // Don't toggle the drawer if it's disabled.
      if (this.disabled) {
        return;
      }
      this.sendData();
    });
  }

  static get observedAttributes() {
    return ["clicked", "disabled"];
  }

  // Only called for the disabled and open attributes due to observedAttributes
  attributeChangedCallback(name, oldValue, newValue) {
    // When the drawer is disabled, update keyboard/screen reader behavior.
    if (this.disabled) {
      this.setAttribute("tabindex", "-1");
      this.setAttribute("aria-disabled", "true");
    } else {
      this.setAttribute("tabindex", "0");
      this.setAttribute("aria-disabled", "false");
    }
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  get clicked() {
    return this.hasAttribute("clicked");
  }

  set clicked(val) {
    if (val) {
      this.setAttribute("clicked", "");
    } else {
      this.removeAttribute("clicked");
    }
  }

  sendData() {
    this.clicked = true;
    this.dispatchEvent(
      new CustomEvent("first-element-click", {
        bubbles: true
      })
    );
  }

  template() {
    return `
      <div>
        <span>Click me!</span>
      </div>
    `;
  }
  connectedCallback() {
    this.innerHTML = this.template();
  }
}
window.customElements.define("first-element", FirstElement);
