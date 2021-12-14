import React from "react";
import "./Header.css";
import Logo from "../../assets/images/header.png";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={Logo} className="punkLogo" alt="" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <SearchIcon style={{ color: "#f8f8ff" }} />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, Items or User ......"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Market Place</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <WbSunnyIcon />
        </div>
      </div>
      <div className="LoginButton">GET IT</div>
    </div>
  );
}

export default Header;
