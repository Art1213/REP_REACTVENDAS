// Importando as bibliotecas necessárias
import React, { useState, useEffect } from 'react';

// Estilos globais (pode criar um arquivo separado, por exemplo, styles.css, e importar no seu componente principal)
import './styles.css';

// Componente Header
const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <div className="search-bar">
        {/* Adicione um componente de barra de pesquisa aqui */}
        <input type="text" placeholder="Pesquisar..." />
      </div>
      <h1>Minha Loja Online</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Produtos</a></li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </nav>
      <div className="clock">{currentTime.toLocaleTimeString()}</div>
    </header>
  );
};

// Componente de Produto
const Product = ({ name, price, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>Preço: ${price}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
};

// Componente de Grid de Produtos
const ProductGrid = () => {
  // Simulando dados de produtos (substitua com seus próprios dados)
  const products = [
    { id: 1, name: 'Produto 1', price: 19.99, imageUrl: 'url-da-imagem-1.jpg' },
    { id: 2, name: 'Produto 2', price: 29.99, imageUrl: 'url-da-imagem-2.jpg' },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

// Componente Principal
const App = () => {
  return (
    <div className="app-container">
      <div className="options-column">
        {/* Adicione opções adicionais aqui */}
        <p>Opção 1</p>
        <p>Opção 2</p>
      </div>
      <div className="main-content">
        <Header />
        <ProductGrid />
      </div>
    </div>
  );
};

export default App;
