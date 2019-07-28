import React from "react"

const Menu = () => (
  <div className="menu">
    <span className="nav-link center">
      &#9776;<span className="nav-menu"> Menu</span>
    </span>
  </div>
)

function openNav() {
  document.getElementById("sideNav").style.width = "180px"
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0"
}

function checkNav() {
  var x = document.getElementById("sideNav")
  if (x.style.width === "0px") {
    x.style.width = " 180px"
  } else {
    x.style.width = "0px"
  }
}

export default Menu
