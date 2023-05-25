import styles from "@/styles/Transaction.module.css";
import { errorText } from "@/utils/strings";
import LoadingScreen from "../common/LoadingScreen";
import useTransactionData from "@/hooks/useTransactionData";
import { useRouter } from "next/router";
import TransactionTable from "./table/TransactionTable";

export default function Transactions() {
  const router = useRouter();
  const { level } = router.query;
  const { data, error, isLoading } = useTransactionData(
    Number.parseInt(level?.toString() ?? "-1")
  );

  return (
    <div className={styles.transactions}>
      {error ? (
        <h2>{errorText}</h2>
      ) : isLoading ? (
        <LoadingScreen />
      ) : (
        <TransactionTable
          key={"transactions_table"}
          data={data}
          rowsPerPage={10}
        />
      )}
    </div>
  );
}
