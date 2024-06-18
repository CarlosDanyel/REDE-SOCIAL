import React from "react";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import style from "./comentario.module.css";

export function Comentario(props) {
  return (
    <div className={style.coment}>
      <Avatar
        hasBoder={false}
        src="https://avatars.githubusercontent.com/u/101694396?v=4"
      />
      <div className={style.comentBox}>
        <div className={style.comentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Carlos Danyel</strong>
              <time>Cerca de 2h</time>
            </div>
            <button title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
