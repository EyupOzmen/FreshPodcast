import Image from "next/image";
import podcastStyles from "./PodcastView.module.css";

const PodcastView = ({ publisher, thumbnailUrl, title, description }) => (
  <>
    <div className={podcastStyles.container}>
      <div>
        <Image width={400} height={200} src={thumbnailUrl} />
      </div>

      <div>
        <p>
          <strong>Title: </strong> {title}
        </p>
        <p>
          <strong>Publisher: </strong> {publisher}
        </p>
        <p>
          <strong>Description: </strong> {description}
        </p>
      </div>
    </div>
  </>
);

export default PodcastView;
