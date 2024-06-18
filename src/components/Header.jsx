import React from "react";
import style from "./header.module.css";

import Logo from "../assets/logoInginite.svg";

export function Header(props) {
  return (
    <>
      <header className={style.header}>
        <img className={style.avatar} src={Logo} alt="Logotipo do Ingite" />
      </header>
    </>
  );
}
