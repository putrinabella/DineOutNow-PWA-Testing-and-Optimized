class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div>
    <a
      href="#mainContent"
      tabindex="1"
      aria-label="Menuju ke konten utama"
      class="skip-to-content"
      >Skip to main content</a
    >
  </div>
      `;
  }
}

customElements.define('skip-content', SkipContent);
