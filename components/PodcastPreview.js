import Image from "next/image";
import Link from "next/link";
import podcastStyles from "./PodcastStyles.module.css";

const PodcastPreview = ({ publisher, thumbnailUrl, podcastId, title }) => (
  <>
    <Link as={`/podcast/${podcastId}`} href="/podcast/[id]">
      <a>
        <div className={podcastStyles.container}>
          <div>
            <Image width={125} height={100} src={thumbnailUrl} />
          </div>

          <div>
            <p>
              <strong>Title:</strong> {title}
            </p>
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
          </div>
        </div>
      </a>
    </Link>
  </>
);

export { PodcastPreview };
