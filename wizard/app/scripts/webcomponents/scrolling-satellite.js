"use strict"

customElements.define('scrolling-satellite',
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement('div')
      pElem.textContent = this.getAttribute('text')
      pElem.style.cssText = "color: blue; border: 1px solid black; height: 10px; width: 100%; background: red;"

      const shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.appendChild(pElem)
    }
  }
)