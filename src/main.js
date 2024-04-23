const Main = () => {
    return <main>
        <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-grid">
          {/* Aquí puedes incluir tus productos destacados */}
          <div className="product">
            <img src="ruta/para/producto1.jpg" alt="Producto 1" />
            <h3>Nombre del Producto 1</h3>
            <p>Descripción corta del Producto 1.</p>
            <span className="price">$99.99</span>
            <button>Añadir al carrito</button>
          </div>
          <div className="product">
            <img src="ruta/para/producto2.jpg" alt="Producto 2" />
            <h3>Nombre del Producto 2</h3>
            <p>Descripción corta del Producto 2.</p>
            <span className="price">$149.99</span>
            <button>Añadir al carrito</button>
          </div>
          {/* Agrega más productos según sea necesario */}
        </div>
      </section>
      <section className="latest-news">
        <h2>Últimas Noticias</h2>
        <div className="news-grid">
          {/* Aquí puedes incluir tus últimas noticias */}
          <div className="news">
            <h3>Título de la Noticia 1</h3>
            <p>Resumen breve de la Noticia 1.</p>
            <a href="/noticia1">Leer más</a>
          </div>
          <div className="news">
            <h3>Título de la Noticia 2</h3>
            <p>Resumen breve de la Noticia 2.</p>
            <a href="/noticia2">Leer más</a>
          </div>
          {/* Agrega más noticias según sea necesario */}
        </div>
      </section>
    </main>;
}

export default Main;