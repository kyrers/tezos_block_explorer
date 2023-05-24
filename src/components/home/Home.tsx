import styles from "@/styles/Home.module.css";
import useBlockData from "@/hooks/useBlockData";
import BlockTable from "./table/BlockTable";
import { errorText } from "@/utils/strings";
import LoadingScreen from "../common/LoadingScreen";

export default function Home() {
  const { data: blockData, error, isLoading } = useBlockData();

  return (
    <div className={styles.home}>
      {error ? (
        <h2>{errorText}</h2>
      ) : isLoading ? (
        <LoadingScreen />
      ) : (
        <BlockTable key={"block_table"} data={blockData} rowsPerPage={10} />
      )}
    </div>
  );
}
