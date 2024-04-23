const Header = () => {
    return <header>
   <div className="logo">
      
      </div>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Buscar productos..." />
        <button type="submit"><i className="fas fa-search"></i></button>
      </div>
</header>;


}

export default Header;