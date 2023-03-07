import React from "react";
import "../Styles/Header.css";

function Header() {
  return (
    <div className="header">
      <button className="header-btn">Home</button>
      <div className="header-line"></div>
      <button className="header-btn">Produk</button>
      <div className="header-line"></div>
      <button className="header-btn">Kontak</button>
      <div className="header-line"></div>
      <button className="header-btn">Tentang Kami</button>
    </div>
  );
}

export default Header;
