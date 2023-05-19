class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div class="hero-inner">
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <span class="hero-plain">JELAJAHI KELEZATAN</span>
        <span class="hero-title">YANG TIADA DUANYA</span>
        <p class="hero-tagline">
          Temukan Kelezatan Tersembunyi dari Setiap <br />Sudut Indonesia
          Hanya di
          <span>DineOutNow</span>
        </p>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
