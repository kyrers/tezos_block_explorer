import styles from "@/styles/LoadingScreen.module.css";
import { loadingText } from "@/utils/strings";

export default function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.ripple}>
        <div></div>
        <div></div>
      </div>
      <p>{loadingText}</p>
    </div>
  );
}
