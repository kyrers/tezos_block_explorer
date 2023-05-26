import styles from "@/styles/LoadingScreen.module.css";
import { loadingText } from "@/utils/strings";

export default function LoadingScreen() {
  return (
    <div className={styles.loadingScreen} data-cy="loading-screen">
      <div className={styles.ripple} data-cy="loading-ripple">
        <div></div>
        <div></div>
      </div>
      <p data-cy="loading-text">{loadingText}</p>
    </div>
  );
}
