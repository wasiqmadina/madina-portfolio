import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <p>
              I'm a rising sophomore at the University of Maryland, majoring in Computer Science. With a strong foundation in Java, I've expanded my skill set this summer to include front-end development, diving into HTML, CSS, and React. Now, I'm learning more about AWS and Cloud Computing, and excited to apply my skills in new and innovative ways.
            </p>
            
            <p>
              Beyond coding, I find solace in creative pursuits like reading, painting, and photography. With a keen eye for detail, I love capturing life's moments through my lens, preserving memories and beauty in every frame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
