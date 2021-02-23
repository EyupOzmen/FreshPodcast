import { useState } from "react";
import { paginate } from "../../utils/paginate";

import {
  EpisodePreview,
  PodcastView,
  Pagination,
  Layout,
} from "../../components/index";

import styles from "../../styles/Detail.module.css";

import { BASE_URL, options } from "../api/url";

const PodcastDetail = ({ data }) => {
  console.log(data);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageData = () => {
    const paginationData = paginate(
      data && data.episodes,
      currentPage,
      pageSize
    );
    return { totalCount: data?.episodes.length, episodes: paginationData };
  };

  const { totalCount, episodes } = getPageData();

  const truncate = (input, number) =>
    input.length > number ? `${input.substring(0, number)}...` : input;

  return (
    <Layout>
      <div className={styles.container}>
        <PodcastView
          key={data.id}
          publisher={data.publisher}
          thumbnailUrl={data.image}
          title={data.title}
          description={truncate(data.description, 150)}
        />

        {episodes && (
          <>
            <h1>EPISODES</h1>
            {episodes?.map((episode) => (
              <EpisodePreview
                key={episode.id}
                thumbnailUrl={episode.thumbnail}
                title={truncate(episode.title, 25)}
                link={episode.link}
              />
            ))}
          </>
        )}
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default PodcastDetail;

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log("params", id);
  const res = await fetch(
    `${BASE_URL}/podcasts/${id}?next_episode_pub_date=1479154463000&sort=recent_first`,
    options
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
