import React from "react";

import style from "./Avatar.module.css";

export function Avatar(props) {
  return (
    <img
      className={props.hasBoder ? style.avatarIfBorder : style.avatar}
      src={props.src}
    />
  );
}
