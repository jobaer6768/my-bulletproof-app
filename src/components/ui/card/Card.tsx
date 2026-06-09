import { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  title: string;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className={styles.card}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  );
};
