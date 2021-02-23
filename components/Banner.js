import BannerStyles from "./BannerStyles.module.css";

const Banner = ({ value, onChange, onClick, disabled }) => {
  return (
    <div className={BannerStyles.bgImg}>
      <div className={BannerStyles.container}>
        <h3>Search Podcasts</h3>

        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Type podcasts"
          id="podcasts"
        />

        <button
          onClick={onClick}
          disabled={disabled}
          className={BannerStyles.btn}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export { Banner };
