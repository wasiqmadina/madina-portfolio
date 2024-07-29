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
        <a href="mailto:madina.wasiq2l@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
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