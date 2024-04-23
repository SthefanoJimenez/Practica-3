const Footer = () => {
    return <footer>
        <p>footer</p>
        <div className="footer-content">
        <h3>Enlaces Rápidos</h3>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </div>
      <div className="footer-content">
        <h3>Contacto</h3>
        <p>Dirección: 123 Calle Principal, Ciudad</p>
        <p>Teléfono: 123-456-7890</p>
        <p>Correo electrónico: info@tutiendatecnologica.com</p>
      </div>
      <div className="footer-content">
        <h3>Síguenos</h3>
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>


    </footer>;
}

export default Footer;