import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const dynamicList = links.map((link, index) =>{
    return <a key={index} href={`#${link}`}>{link}</a>
  })

  return <nav>{dynamicList}</nav>;
}

export default NavBar;
