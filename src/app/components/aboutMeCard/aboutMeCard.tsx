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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexBasis: "40%",
        }}
      >
        <div
          style={{
            width: "70%",
            aspectRatio: 1,
            position: "relative",
          }}
        >
          <Image
            style={{ objectFit: "contain" }}
            src={imagePath}
            alt={altTxt}
            fill={true}
          />
        </div>
        <h3 style={{ margin: "1em 0 0 0" }}>{heading}</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexBasis: "60%",
        }}
      >
        <p style={{ margin: "0 0 0.2em" }}>{title}</p>
        <p style={{ margin: "0 0 1em" }}>{timespan}</p>
        <p style={{ margin: 0 }}>{bodyText}</p>
      </div>
    </article>
  );
};
