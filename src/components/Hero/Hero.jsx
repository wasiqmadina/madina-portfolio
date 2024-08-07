import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Madina!</h1>
        <p className={styles.description}>
          Welcome to my corner of the internet, where code meets creativity and passion
          fuels innovation. I'm an undergraduate Computer Science student
          driven to become a skilled Software Engineer!
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/madina-wasiq"
            className={styles.socialLink}
          >
            <img src={getImageUrl("contact/linkedin.png")} alt="" />
          </a>
          <a
            href="mailto:madina.wasiq2@gmail.com"
            className={styles.socialLink}
          >
            <img src={getImageUrl("contact/gmail.png")} alt="" />
          </a>
          <a
            href="https://www.github.com/wasiqmadina"
            className={styles.socialLink}
          >
            <img src={getImageUrl("contact/github.png")} alt="" />
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="madina.wasiq2@gmail.com"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
