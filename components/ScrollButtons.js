import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import styles from "./ScrollButtons.module.css";

const ScrollButtons = ({ children, onLeftClick, onRightClick }) => {
  return (
    <>
      <div className={styles.arrowLeftBtnContainer}>
        <button className={styles.arrowBtn} onClick={onLeftClick}>
          <KeyboardArrowLeftIcon
            color="secondary"
            className={styles.leftArrow}
          />
        </button>
      </div>
      {children}
      <div className={styles.arrowRightBtnContainer}>
        <button className={styles.arrowBtn} onClick={onRightClick}>
          <KeyboardArrowRightIcon className={styles.rightArrow} />
        </button>
      </div>
    </>
  );
};

export { ScrollButtons };
