class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="app-bar">
      <div class="app-bar__menu">
        <button
          id="hamburgerButton"
          class="header-menu"
          tabindex="0"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <div class="app-bar__brand" id="content">
        <img src="./public/images/assets/Logo.png" alt="Logo DineOutNow" />
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li class="app-bar__item"><a href="/">Home </a></li>
          <li class="app-bar__item"><a href="#/favorite">Favorite</a></li>
          <li class="app-bar__item">
            <a
              href="https://www.linkedin.com/in/putri-nabella-604218250/"
              target="_blank"
              rel="noopener"
              >About Us</a
            >
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
