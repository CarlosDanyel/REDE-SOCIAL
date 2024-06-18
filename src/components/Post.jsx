import React from "react";

import { Avatar } from "./Avatar";
import { Comentario } from "./Comentario";
import style from "./post.module.css";

export function Post(props) {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar
            className={style.avatar}
            hasBoder
            src="https://avatars.githubusercontent.com/u/101694396?v=4"
          />
          <div className={style.author_info}>
            <strong>Carlos Danyel</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Abril as 23h15" dateTime="2024-06-18">
          Publicado há 1h
        </time>
      </header>
      <div className={style.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
      <form action="" className={style.comentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder="Deixe um comentario" />
        <div className={style.containerBtn}>
          <button type="submit">Comentario</button>
        </div>
      </form>
      <Comentario />
    </article>
  );
}
