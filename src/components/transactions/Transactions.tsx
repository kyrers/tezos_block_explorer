import styles from "@/styles/Home.module.css";
import { errorText } from "@/utils/strings";
import LoadingScreen from "../common/LoadingScreen";
import useTransactionData from "@/hooks/useTransactionData";
import { useRouter } from "next/router";

export default function Transactions() {
  const router = useRouter();
  const { level } = router.query;
  const {
    data: transactionData,
    error,
    isLoading,
  } = useTransactionData(Number.parseInt(level?.toString() ?? "-1"));

  return (
    <div className={styles.home}>
      {error ? (
        <h2>{errorText}</h2>
      ) : isLoading ? (
        <LoadingScreen />
      ) : (
        /* <BlockTable key={"block_table"} data={blockData} rowsPerPage={10} />*/ "TO DO"
      )}
    </div>
  );
}
