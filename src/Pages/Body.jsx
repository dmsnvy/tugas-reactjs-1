import React, { useState } from "react";
import "../Styles/Body.css";

const menu = [
  {
    name: "Mie Goreng",
    image: "https://www.bango.co.id/gfx/recipes/temp_thumb-1573119381.jpg",
    id: 1,
  },
  {
    name: "Nasi Goreng",
    image:
      "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/10/31/1425295480.png",
    id: 2,
  },
  {
    name: "Ayam Goreng",
    image:
      "https://img-global.cpcdn.com/recipes/e2eddd5ea08ec4ce/680x482cq70/ayam-goreng-rempah-foto-resep-utama.jpg",
    id: 3,
  },
  {
    name: "Sate Ayam",
    image:
      "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/12/460178680.jpg",
    id: 4,
  },
  {
    name: "Soto Ayam",
    image:
      "https://img.kurio.network/jwZWt7TJhW9njBC5GAy4HTF72FQ=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/21/10/12/9c41af5a-a959-44c7-80d0-9baa58034afe.jpe",
    id: 5,
  },
];

const Body = () => {
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (id) => {
    const order = menu.find((item) => item.id === id);
    setOrders([...orders, order]);
  };

  const handleCancelOrder = () => {
    setOrders([]);
  };

  const handleInputOrder = (event, id) => {
    const value = event.target.value;
    const newOrders = [...orders];
    const index = newOrders.findIndex((item) => item.id === id);
    newOrders[index].quantity = value;
    setOrders(newOrders);
  };

  const totalPrice = orders.reduce(
    (total, order) => total + (order.quantity || 0),
    0
  );

  return (
    <div>
      <h1>Daftar Makanan yang Kami Sediakan:</h1>
      <div className="menu">
        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            <img
              src={item.image}
              alt={item.name}
              width="100"
              height="100"
              className="menu-image"
            />
            <div className="menu-name">{item.name}</div>
            <button onClick={() => handleAddOrder(item.id)}>
              Pesan Sekarang
            </button>
          </div>
        ))}
      </div>
      <div className="order-box">
        {orders.map((item) => (
          <div key={item.id} className="order-item">
            <img
              src={item.image}
              alt={item.name}
              width="100"
              height="100"
              className="order-image"
            />
            <div className="order-name">{item.name}</div>
            <input
              type="number"
              min="1"
              max="10"
              className="order-quantity"
              value={item.quantity || ""}
              onChange={(event) => handleInputOrder(event, item.id)}
            />
          </div>
        ))}
        {orders.length > 0 && (
          <div className="order-total">
            <div>Total Pesanan: {orders.length}</div>
            <div>Jumlah Pesanan: {totalPrice}</div>
            <button onClick={handleCancelOrder}>Batalkan Semua Pesanan</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
