import React from "react";
import styles from "./Organizations.module.css";
import organizations from "../../data/organizations.json";
import { getImageUrl } from "../../utils";

export const Organizations = () => {
  // Duplicate organizations to ensure there's enough content for seamless scrolling
  const duplicatedOrganizations = [...organizations, ...organizations, ...organizations, ...organizations, ...organizations, ...organizations];

  return (
    <section id="organizations" className={styles.container}>
      <h2 className={styles.title}>Organizations & Leadership</h2>
      <div className={styles.content}>
        <div className={styles["scroll-wrapper"]}>
          {duplicatedOrganizations.map((org, id) => (
            <div key={id} className={styles.organizationItem}>
              <img
                src={getImageUrl(org.imageSrc)}
                alt={`${org.name} Logo`}
                className={styles.organizationImage}
              />
              <div className={styles.organizationDetails}>
                <h3>{org.name}</h3>
                <p>{org.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
