
const popup = document.getElementById('popup');
const popupInfo = document.getElementById('popup-info');
const closePopup = document.getElementById('close-popup');

const aboutButton = document.getElementById('btn-about');
const skillsButton = document.getElementById('btn-skills');
const contactButton = document.getElementById('btn-contact');

function showPopup(content) {
  popupInfo.innerHTML = content;
  popup.style.display = 'flex'; 
  setTimeout(() => popup.classList.add('show'), 10); 
}

function closePopupHandler(event) {
  if (event.target === popup || event.target === closePopup) {
    popup.classList.remove('show'); 
    setTimeout(() => {
      popup.style.display = 'none';
    }, 300); 
  }
}

popup.addEventListener('click', closePopupHandler);

aboutButton.addEventListener('click', () => {
  showPopup(`
    <h2>Sobre mí</h2>
    <p>Soy Jaime Arribas, un profesional con experiencia en <strong>gestión y desarrollo de proyectos digitales</strong>, especializado en <strong>Marketing Digital</strong>, <strong>desarrollo web</strong> y <strong>Marketing Cloud</strong>. Actualmente, trabajo como técnico web y en Marketing Cloud en el departamento de Marketing de la <strong>Universidad Francisco de Vitoria (UFV</strong>, donde me encargo de <strong>optimizar procesos digitales y gestionar proyectos de comunicación digital.</strong></p>
    <p>Anteriormente, trabajé en CSO Digital como <strong>Web Master y especialista en Marketing Digital</strong>, encargándome de la <strong>creación y maquetación de páginas web y optimización de campañas publicitarias</strong>. Además, disfruto de la fotografía digital y la creación de contenido multimedia, habilidades que aplico en mi día a día profesional.</p>
  `);
});

skillsButton.addEventListener('click', () => {
  showPopup(`
    <h2>Habilidades</h2>
    <ul>
      <li><strong>Marketing Digital:</strong> Creación y optimización de campañas publicitarias (Google Ads, Meta Ads).</li>
      <li><strong>Gestión de Redes Sociales:</strong> Community management, diseño y creación de contenido multimedia.</li>
      <li><strong>Desarrollo Web:</strong> Creación y maquetación de páginas web, mantenimiento y soporte técnico.</li>
      <li><strong>Gestión de CRM:</strong> Experiencia en la administración de clientes y sus redes sociales.</li>
      <li><strong>Fotografía Digital:</strong> Captura y edición de contenido visual profesional.</li>
    </ul>
  `);
});

contactButton.addEventListener('click', () => {
  showPopup(`
    <h2>Contacto</h2>
    <p><strong>Teléfono:</strong> +34 649 576 763</p>
    <p><strong>Email:</strong> <a href="mailto:hola@jaimearribas.com">hola@jaimearribas.com</a></p>
    <p><strong>Ubicación:</strong> Madrid</p>
    <p>También puedes visitar mi portafolio en <a href="https://socialscopedata.com" target="_blank">socialscopedata.com</a>.</p>
  `);
});
