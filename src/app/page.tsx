import Image from "next/image";
import styles from "./page.module.css";
import { AboutMeCard } from "./components/aboutMeCard/aboutMeCard";

// TODO: Add sizes to images. See https://nextjs.org/docs/pages/api-reference/components/image#sizes
// TODO: Pitäiskö laittaa jotain väliotsikoita ja nostaa "cats and coffee" ykköseks, koska se on ns. persoonallinen. :D
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
          imagePath={"/cats_and_coffee.jpg"}
          altTxt={"Drawing of a cat laying next to a cup of coffee."}
          heading={"About me"}
          title={"Powered by: Cats and Coffee"}
          timespan={""}
          bodyText={
            "Dark roast with oat milk is the only correct way to drink coffee. I love bouldering, books and camping. Especially pair boulders, tik-tok recommended fantasy books and the Pallas-Yllästunturi National Park have been this autumn's themes. My cat eats all my plants, I get excited really easily and laugh at stupid engineering jokes."
          }
          justify="left"
        />
        <AboutMeCard
          imagePath={"/teekkari_cap.jpg"}
          altTxt={"Drawing of a teekkari cap."}
          heading={"Aalto Unirversity"}
          title={"Human-Computer Interaction 2022-"}
          timespan={"Bioinformation Technology 2018-2022"}
          bodyText={
            "I’m currently doing my master’s in Human-Computer Interaction focusing on usability, user research, and creating intuitive web services. Before my master’s, I studied bioinformation technology, with an emphasis on analyzing data measured from humans — covering a lot of math, physics, and data analysis."
          }
          justify="right"
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
          justify="left"
        />
        <AboutMeCard
          imagePath={"/key_management.jpg"}
          altTxt={
            "Drawing of two keys and a password field filled with asterisks."
          }
          heading={"TietoEvery Card"}
          title={"Software Developer"}
          timespan={"06.2020- 12.2021"}
          bodyText={
            "Developed an internal tool related to secret key management with Python. In addition to quickly learning about a new subject area, I gained experience in working autonomously and proactively gathering information to solve complex, hard to define, problems."
          }
          justify="right"
        />
        <AboutMeCard
          imagePath={"/skills.jpg"}
          altTxt={
            "Drawing of the logos of different programming languages and other related technologies."
          }
          heading={"Skills"}
          title={"Programming skills"}
          timespan={""}
          bodyText={
            "I’m comfortable with and know my way around Typescript, Javascript, Python, Kotlin & React. In addition to these technologies, I’ve dabbled in Scala and Rust."
          }
          justify="left"
        />
        <AboutMeCard
          imagePath={"/values.jpg"}
          altTxt={"Drawing of a girl happily coding on a laptop."}
          heading={"Values"}
          title={""}
          timespan={""}
          bodyText={
            "I value doing work that is both societally significant and personally interesting. I’m especially interested in learning about accessibility on the web, because everyone has the right to information, and I know that accessibility doesn’t happen by accident."
          }
          justify="right"
        />
      </section>
    </main>
  );
}
