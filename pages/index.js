import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  Banner,
  Layout,
  PodcastPreview,
  ScrollButtons,
} from "../components/index";

import { BASE_URL, options } from "./api/url";

export default function Home({ genres }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(genres[0].id);
  const [bestPodcastsByGenre, setBestPodcastByGenre] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [genreName, setGenreName] = useState("");

  let navRef = useRef();

  useEffect(() => {
    const getBestPodcastByGenre = async () => {
      const res = await fetch(
        `${BASE_URL}/best_podcasts?genre_id=${genre}&region=us&safe_mode=0`,
        options
      );
      const { podcasts } = await res.json();

      setBestPodcastByGenre(podcasts);
      navRef.current.scrollLeft = 0;
      navRef.current.scrollTop = 0;
    };

    let name = genres.filter((item) => item.id == genre);
    console.log(name);
    setGenreName(name);
    getBestPodcastByGenre();
  }, [genre, setGenre]);

  const changeGenre = (newGenre) => {
    setGenre(newGenre);
  };

  const handleNav = (direction) => {
    if (direction === "left") {
      navRef ? (navRef.current.scrollLeft -= 282.3) : null;
    } else {
      navRef ? (navRef.current.scrollLeft += 282.3) : null;
    }
    console.log(navRef);
  };
  const truncate = (input) =>
    input.length > 25 ? `${input.substring(0, 25)}...` : input;

  return (
    <Layout>
      <Banner
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={async () => {
          const searchResults = await fetch(
            `${BASE_URL}/typeahead?q=${search}&show_podcasts=1&show_genres=1&safe_mode=0`,
            options
          );

          const { podcasts } = await searchResults.json();
          console.log("podRes", podcasts);
          setPodcasts(await podcasts);
        }}
        disabled={search === ""}
      />

      <>
        <Head>
          <title>Podcast App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {search === "" ? (
          <div className={styles.filterContainer}>
            <div>
              <label className={styles.label}>
                Choose a genre:{" "}
                <select
                  className={styles.select}
                  onChange={(e) => changeGenre(e.target.value)}
                  value={genre}
                >
                  {genres?.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <br />
            <div className={styles.subtitle}>
              <p>{`The best podcasts in the "${genreName[0]?.name}" genre`}</p>
            </div>

            <div className={styles.container}>
              <ScrollButtons
                onLeftClick={() => handleNav("left")}
                onRightClick={() => handleNav("right")}
              >
                <div ref={navRef} className={styles.scroll}>
                  {bestPodcastsByGenre?.map((podcast) => {
                    const { publisher, thumbnail, id, title } = podcast;

                    return (
                      <PodcastPreview
                        key={id}
                        publisher={truncate(publisher)}
                        thumbnailUrl={thumbnail}
                        podcastId={id}
                        title={truncate(title)}
                      />
                    );
                  })}
                </div>
              </ScrollButtons>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.search}>
              <p>{`Search result for: "${search}"`}</p>
            </div>
            <div className={styles.container}>
              <ScrollButtons
                onLeftClick={() => handleNav("left")}
                onRightClick={() => handleNav("right")}
              >
                <div ref={navRef} className={styles.scroll}>
                  {podcasts?.map((podcast) => {
                    const {
                      publisher_original,
                      thumbnail,
                      id,
                      title_original,
                    } = podcast;

                    return (
                      <PodcastPreview
                        key={id}
                        publisher={truncate(publisher_original)}
                        thumbnailUrl={thumbnail}
                        podcastId={id}
                        title={truncate(title_original)}
                      />
                    );
                  })}
                </div>
              </ScrollButtons>
            </div>
          </>
        )}
        <div className={styles.goBackBtn}>
          {search !== "" && (
            <button className={styles.btn} onClick={() => setSearch("")}>
              Go Back
            </button>
          )}
        </div>
      </>
      <footer className={styles.footer}>Powered by @dotpilot</footer>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const results = await fetch(`${BASE_URL}/genres?top_level_only=1`, options);

  const { genres } = await results.json();

  return {
    props: {
      genres,
    },
  };
}
