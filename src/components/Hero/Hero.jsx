import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Darshan Jagtap</h1>
        <p className={styles.description}>
          I'm a final year computer engineering student with hands-on experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.btnContainer}>
        <a href="mailto:darshanjagtap345@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://drive.google.com/file/d/1swh6J04pXLEit_Dey_BASl5O8iW4eFSX/view?usp=drivesdk" className={styles.contactBtn}>
          Resume/CV
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
