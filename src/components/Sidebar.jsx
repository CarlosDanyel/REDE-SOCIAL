import React from "react";

import { PencilLine } from "phosphor-react";

import { Avatar } from "./Avatar";
import style from "./sidebar.module.css";

export function Sidebar(props) {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://plus.unsplash.com/premium_photo-1678566111483-f45ad346d50a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={style.profile}>
        <Avatar
          className={style.avatar}
          hasBoder
          src="https://avatars.githubusercontent.com/u/101694396?v=4"
        />
        <strong>Carlos Danyel</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
