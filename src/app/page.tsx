import Image from "next/image";

// TODO: Add sizes to images. See https://nextjs.org/docs/pages/api-reference/components/image#sizes

type AboutMeSectionProps = {
  image_path: string;
  alt_txt: string;
  heading: string;
  title: string;
  timespan: string;
  body_text: string;
  justify: string;
};

const AboutMeSection = ({
  image_path,
  alt_txt,
  heading,
  title,
  timespan,
  body_text,
  justify,
}: AboutMeSectionProps) => {
  return (
    <article
      style={{
        border: "1px solid",
        borderRadius: "10px",
        padding: "2rem",
        gap: "2rem",
        width: "30em",
        height: "fit-content",
        display: "flex",
        flexDirection: justify == "left" ? "row" : "row-reverse",
        alignSelf: justify == "left" ? "flex-start" : "flex-end",
        backgroundColor: "white",
        fontFamily: "var(--font-inter)",
      }}
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
            src={image_path}
            alt={alt_txt}
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
        <p style={{ margin: 0 }}>{body_text}</p>
      </div>
    </article>
  );
};

export default function Home() {
  return (
    // TODO: One simple trick. Joku flex box reverse .. To get the image and text to flip...
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10rem",
        paddingBlock: "10rem",
        margin: "auto",
        maxWidth: 800,
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-inria-serif)",
              fontSize: "7rem",
              margin: 0,
              marginRight: "-150px",
              zIndex: 1,
            }}
          >
            Henna <br /> Kotilainen
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", width: "300px" }}>
            A Soon to graduate fullstack developer and accessibility enthusiast.
          </p>
        </div>
        <div
          style={{
            width: "80%",
            aspectRatio: "1.21",
            position: "relative",
          }}
        >
          <Image
            style={{ objectFit: "contain" }}
            src={"/henna_kotilainen_extended.jpg"}
            alt="Headshot of Henna Kotilainen."
            fill={true}
          />
        </div>
      </section>
      <section
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-inria-serif)",
            fontSize: "5rem",
            margin: 0,
          }}
        >
          About me
        </h2>
        <AboutMeSection
          image_path={"/teekkari_cap.jpg"}
          alt_txt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          body_text={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="left"
        />
        <AboutMeSection
          image_path={"/girl_on_computer.jpg"}
          alt_txt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          body_text={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="right"
        />
        <AboutMeSection
          image_path={"/key_management.jpg"}
          alt_txt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          body_text={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="left"
        />
        <AboutMeSection
          image_path={"/skills.jpg"}
          alt_txt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          body_text={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="right"
        />
        <AboutMeSection
          image_path={"/values.jpg"}
          alt_txt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          body_text={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="left"
        />
        <AboutMeSection
          image_path={"/cats_and_coffee.jpg"}
          alt_txt={"Drawing of a girl happily coding on a laptop."}
          heading={"Vuono Group"}
          title={"Full Stack Developer"}
          timespan={"05.2022 -"}
          body_text={
            "Worked on a consulting project for a client where we developed a backend utilizing Kotlin and GraphQL. Developed an internal tool  with Typescript that fetched and visualized data from the AWS Cost Explorer API."
          }
          justify="right"
        />
      </section>
    </main>
  );
}
