const template = document.createElement('template');

template.innerHTML = `<nav class="navbar navbar-expand-lg">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#siteNavbar" aria-controls="siteNavbar" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
</button>
<div class="collapse navbar-collapse" id="siteNavbar">
  <!-- <div class="navbar-brand" href="#"><img src="images/logo.png" alt="F.P Aromatics Logo"></div> -->
  <ul id="navbar-links" class="navbar-nav ml-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Products</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
  </ul>
</div>
</nav>`;

class Navigation extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('site-navigation', Navigation);