class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer   tabindex="0"
      aria-label="footer" >
      <p>Copyright © 2023 - DineOutNow</p>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
