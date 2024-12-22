import Image from "next/image";
import styles from "./page.module.css";
import { AboutMeCard } from "./components/aboutMeCard/aboutMeCard";

// TODO: Add sizes to images. See https://nextjs.org/docs/pages/api-reference/components/image#sizes
// TODO: hero section paragrahp text size-> larger
// TODO: about me text size on mobile -> smaller
// TODO: Kontsa
// TODO: Metatags
// TODO: Favicon
// TODO: Opengraphimage
// TODO: readme

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroTextDiv}>
          <h1 className={styles.h1}>
            Henna <br /> Kotilainen
          </h1>
          <p className={styles.heroText}>
            A soon to graduate fullstack developer and accessibility enthusiast.
          </p>
        </div>
        <div className={styles.imageDiv}>
          <Image
            style={{ objectFit: "contain" }}
            src={"/henna_kotilainen_extended.jpg"}
            alt="Headshot of Henna Kotilainen."
            fill={true}
          />
        </div>
      </section>
      <section className={styles.aboutMeSection}>
        <h2 className={styles.h2}>About me</h2>
        <AboutMeCard
          imagePath={"/teekkari_cap.jpg"}
          altTxt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          bodyText={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="left"
        />
        <AboutMeCard
          imagePath={"/girl_on_computer.jpg"}
          altTxt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          bodyText={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="right"
        />
        <AboutMeCard
          imagePath={"/key_management.jpg"}
          altTxt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          bodyText={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="left"
        />
        <AboutMeCard
          imagePath={"/skills.jpg"}
          altTxt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          bodyText={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="right"
        />
        <AboutMeCard
          imagePath={"/values.jpg"}
          altTxt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          bodyText={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="left"
        />
        <AboutMeCard
          imagePath={"/cats_and_coffee.jpg"}
          altTxt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          bodyText={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="right"
        />
      </section>
    </main>
  );
}
