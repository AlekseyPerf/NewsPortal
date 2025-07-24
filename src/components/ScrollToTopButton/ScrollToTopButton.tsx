import { UpOutlined } from "@ant-design/icons";
import { useScrollToTop } from "../../hooks";
import styles from "./ScrollToTopButton.module.scss";

const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <div className={styles.scrollToTopButton}>
      {isVisible && <UpOutlined onClick={scrollToTop} />}
    </div>
  );
};

export default ScrollToTopButton;
