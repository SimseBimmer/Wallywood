// assets/javascript/components/footer.js
export function generateFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('globalFooter');
  footer.innerHTML = `
      <div id="left">
          <div class="wallywoodLogo" id="wallywoodLogoFooter">
              <ul>
                  <li>Wallywood</li>
              </ul>
          </div>
          <ul>
              <li>Øster Uttrupvej 1</li>
          </ul>
          <ul>
              <li>9000 Aalborg</li>
          </ul>
      </div>
      <div id="center">
          <ul>
              <li>CVR: 12345678</li>
          </ul>
          <ul>
              <li>MAIL: info@wallywood.dk</li>
          </ul>
          <ul>
              <li>MOBIL: +45 9812 3456</li>
          </ul>
      </div>
      <div></div>
      <div id="right">
          <img src="assets/images/Social Media Icons.png" alt="socials">
      </div>
  `;
  return footer;
}
