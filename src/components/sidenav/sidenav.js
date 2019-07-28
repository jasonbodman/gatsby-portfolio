import React from "react"

const sideNav = () => (
  <div id="sideNav" class="sideNav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
      &times;
    </a>
    <a href="#main" onclick="closeNav()">
      Home
    </a>
    <a href="#services" onclick="closeNav()">
      Services
    </a>
    <a href="#portfolio" onclick="closeNav()">
      Portfolio
    </a>
    <a href="#contact" onclick="closeNav()">
      Contact
    </a>
  </div>
)

export default SideNav
