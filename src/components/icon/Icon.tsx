import React from "react";

// import { classNames } from "../shared/classNames";

import * as icons from "../../resources/icons";

import styles from "./icon.module.scss";

export type Icons = keyof typeof icons;
export interface IconProps {
  icon: Icons;
  size?: "small" | "medium" | "large" | "xl";
}

export const Icon = ({ size = "medium", icon,}: IconProps) => {
  return (
    <span className={styles[`icon--${size}`]}>
      {icons[icon]()}
    </span>
  );
};
