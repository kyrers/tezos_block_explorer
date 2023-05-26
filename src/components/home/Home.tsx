import styles from "@/styles/Home.module.css";
import useBlockData from "@/hooks/useBlockData";
import BlockTable from "./table/BlockTable";
import { errorText } from "@/utils/strings";
import LoadingScreen from "../common/loading/LoadingScreen";

export default function Home() {
  const { data, error, isLoading } = useBlockData();

  return (
    <div className={styles.home}>
      {error ? (
        <h2 data-cy="home-error-text">{errorText}</h2>
      ) : isLoading ? (
        <LoadingScreen />
      ) : (
        <BlockTable key="blocks_table" data={data} rowsPerPage={10} />
      )}
    </div>
  );
}
