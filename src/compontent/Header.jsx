import React, { Component } from "react";
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <h1 className="header-logo">FakeKart</h1>
        <div className="header-search">
          <input type="text" className="header-searchInput" />
          <SearchIcon />
        </div>
        <div className="header-nav">
          <div className="header-options">
            <span className="header-optionsOne">hello,Guest</span>
            <span className="header-optionsTwo">Login</span>
          </div>
          <div className="header-options">
            <span className="header-optionsOne">Return</span>
            <span className="header-optionsTwo">&order</span>
          </div>
          <div className="header-options_basket">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
