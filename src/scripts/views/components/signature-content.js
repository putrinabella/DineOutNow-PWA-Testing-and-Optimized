class SignatureContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="content" id="maincontent">
    <h1 class="content-label">The Signature</h1>
    <h4 class="content-sub">
      Experience culinary creativity with every bite of signature dishes
    </h4>
    <div class="container">
      <article class="card">
      <img
      src="./public/images/assets/Fairy Birthday.jpeg"
      alt="Fairy Birthday Party Cookies - Signature Menu Fairy Cafe"
    />
        <div class="top-content">
          <p>Fairy Birthday Party Cookies</p>
          <a href="#" class="title">Fairy Cafe</a>
        </div>
      </article>
      <article class="card">
        <img
          src="./public/images/assets/Rabbit Katsu.jpeg"
          alt="Rabbit Katsu - Signature Menu Bring Your Phone Cafe"
        />
        <div class="top-content">
          <p>Sweet Rabbit Katsu</p>
          <a href="#" class="title">Bring Your Phone Cafe</a>
        </div>
      </article>
      <article class="card">
        <img
          src="./public/images/assets/Sichuan.jpeg"
          alt="Sichuan Chili Oil Wonton - Signature Menu Pangsit Express"
        />
        <div class="top-content">
          <p>Sichuan Chili Oil Wontons</p>
          <a href="#" class="title">Pangsit Express</a>
        </div>
      </article>
      <article class="card">
        <img
          src="./public/images/assets/Pancakes.jpeg"
          alt="Japanese soufflé pancake - Saya Suka"
        />
        <div class="top-content">
          <p>Japanese soufflé pancakes</p>
          <a href="#" class="title">Saya Suka</a>
        </div>
      </article>
      <article class="card">
        <img
          src="./public/images/assets/Mentai.jpeg"
          alt="Crispy Chicken Mentai - Signature Menu Run The Gun"
        />
        <div class="top-content">
          <p>Crispy Chicken Mentai</p>
          <a href="#" class="title">Run The Gun</a>
        </div>
      </article>
      <article class="card">
        <img
          src="./public/images/assets/Fluffy.jpeg"
          alt="Fluffy Coffee - Signature Menu Kafein"
        />
        <div class="top-content">
          <p>Fluffy Coffee</p>
          <a href="#" class="title">Kafein</a>
        </div>
      </article>
      <article class="card">
        <img
          src="./public/images/assets/Duck.jpeg"
          alt="Peking Duck Special - Signature Menu Ducky Duck"
        />
        <div class="top-content">
          <p>Peking Duck Special</p>
          <a href="#" class="title">Ducky Duck</a>
        </div>
      </article>
    </div>
  </div>
    `;
  }
}

customElements.define('signature-content', SignatureContent);
