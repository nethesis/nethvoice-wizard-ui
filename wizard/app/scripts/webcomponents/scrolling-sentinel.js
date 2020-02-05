"use strict"

function ScrollingSentinel() {
  return Reflect.construct(HTMLElement, [], this.constructor);
}

ScrollingSentinel.prototype = Object.create(HTMLElement.prototype);
ScrollingSentinel.prototype.constructor = ScrollingSentinel;
Object.setPrototypeOf(ScrollingSentinel, HTMLElement);

ScrollingSentinel.prototype.connectedCallback = function() {
  this.innerHTML = '';
};
customElements.define('scrolling-sentinel', ScrollingSentinel);

// customElements.define('scrolling-sentinel', //// delete
//   class extends HTMLElement {
//     constructor() {
//       super()

//       function dispatch(evt) {
//         var event = new Event(evt);
//         document.dispatchEvent(event);
//       }
      
//       this.observer = new IntersectionObserver(entries => {
//         if (entries[0].intersectionRatio <= 0) {
//           return;
//         }
//         dispatch(entries[0].target.getAttribute("event"))

//       });
//       this.observer.observe(this);
//     }
    
//     disconnectedCallback () {
//       this.observer.unobserve(this)
//     }
//   }
// )