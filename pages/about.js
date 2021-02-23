import { Layout } from "../components/index";
import Image from "next/image";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.header}>FRESH PODCASTS</div>
          <Image
            height={300}
            width={375}
            src="/podcastTwo.jpg"
            alt="PodcastTwo"
          />
          <div className={styles.description}>
            <p className={styles.descriptionText}>
              Search the whole Internet's podcasts. Listeners find ALL podcast
              episodes interviewing or talking about a person. Journalists do
              research and find information in podcasts. Students learn specific
              topics from podcasts. Podcasters find cross-promotion
              opportunities. Developers use Listen API to build podcast apps.
            </p>
          </div>
          <footer className={styles.footer}>Powered by @dotpilot</footer>
        </div>
      </Layout>
    </>
  );
};

export default About;
