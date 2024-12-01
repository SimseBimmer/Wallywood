// assets/javascript/components/header.js
export function generateHeader() {
  const header = document.createElement('header');
  header.classList.add('globalHeader');
  header.innerHTML = `
      <nav>
          <div class="wallywoodLogo">
              <h1>Wallywood</h1>
          </div>
          <ul>
              <li><a href="#">FORSIDE</a></li>
              <li><a href="#">PLAKATER</a></li>
              <li><a href="#">OM OS</a></li>
              <li><a href="#">KONTAKT OS</a></li>
              <li><a href="#">LOGIN</a></li>
              <li><a href="#"><img src="assets/images/Cart.svg" alt="CART"></a></li>
          </ul>
      </nav>
  `;
  return header;
}
