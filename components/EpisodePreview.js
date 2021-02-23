import Image from "next/image";
import podcastStyles from "./EpisodeStyles.module.css";

const EpisodePreview = ({ thumbnailUrl, title, link }) => (
  <>
    <div className={podcastStyles.container}>
      <div>
        <Image width={250} height={125} src={thumbnailUrl} />
      </div>

      <div className={podcastStyles.text}>
        <p>
          <strong>Title:</strong> {title}
        </p>
        <a href={link}>
          <strong>Link</strong>
        </a>
      </div>
    </div>
  </>
);

export { EpisodePreview };
