import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:madina.wasiq2@gmail.com">
            <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://linkedin.com/in/madina-wasiq-b693a2269" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/wasiqmadina" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
