import Image from "next/image";
import styles from "./aboutMeCard.module.css";

type AboutMeCardProps = {
  imagePath: string;
  altTxt: string;
  heading: string;
  title: string;
  timespan: string;
  bodyText: string;
  justify: string;
};

export const AboutMeCard = ({
  imagePath,
  altTxt,
  heading,
  title,
  timespan,
  bodyText,
  justify,
}: AboutMeCardProps) => {
  return (
    <article
      className={
        justify == "left"
          ? styles.aboutMeCard
          : `${styles.aboutMeCard} ${styles.aboutMeCardRight}`
      }
    >
      <div className={styles.leftDiv}>
        <div className={styles.imageDiv}>
          <Image
            style={{ objectFit: "contain" }}
            src={imagePath}
            alt={altTxt}
            fill={true}
          />
        </div>
        <h3 className={styles.h3}>{heading}</h3>
      </div>
      <div className={styles.rightDiv}>
        <p className={styles.titleP}>{title}</p>
        <p className={styles.timespanP}>{timespan}</p>
        <p className={styles.bodyP}>{bodyText}</p>
      </div>
    </article>
  );
};
