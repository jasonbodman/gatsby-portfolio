import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <div class="nav-contact">
      <span class="nav-link center">
        &#9776;<span class="nav-menu"> Menu</span>
      </span>
    </div>
  </header>
)

function openNav() {
  document.getElementById("mySidenav").style.width = "180px"
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
}

function checkNav() {
  var x = document.getElementById("mySidenav")
  if (x.style.width === "0px") {
    x.style.width = " 180px"
  } else {
    x.style.width = "0px"
  }
}

export default Header
