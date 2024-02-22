import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "masa con oliva Italiana y  orégano",
    price: 4500,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomate y Muzzarella",
    price: 4500,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomate , Muzzarella , Espinaca y Ricota",
    price: 5000,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomate , Muzzarella , Portobellos  y Cebolla",
    price: 5500,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomate , Muzzarella y Peperoni",
    price: 5500,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomate , Muzzarella , Jamon Crudo y Rúcula",
    price: 6500,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza!</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2> Nuestro Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/*<Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        img="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        img="pizzas/funghi.jpg"
        price={12}
  />*/}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>SOLD OUT </span>
        ) : (
          <span> PRECIO :${pizzaObj.price}</span>
        )}
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const open = 19;
  console.log(hour);
  const close = 24;
  const isOpen = hour >= open && hour <= close;
  console.log(isOpen);
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <>
            <p>El local esta Abierto Ahora!</p>
            <button className="btn">Pedi Aca!</button>
          </>
        ) : (
          <p>Lo sentimos, esta cerrado, nos volvemos a encontrar mas tarde!</p>
        )}
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
