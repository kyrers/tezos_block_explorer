import styles from "@/styles/Transaction.module.css";
import { errorText } from "@/utils/strings";
import LoadingScreen from "../common/loading/LoadingScreen";
import useTransactionData from "@/hooks/useTransactionData";
import { useRouter } from "next/router";
import TransactionTable from "./table/TransactionTable";
import Link from "next/link";

export default function Transactions() {
  const router = useRouter();
  const { level } = router.query;
  const { data, error, isLoading } = useTransactionData(
    Number.parseInt(level?.toString() ?? "-1")
  );

  return (
    <div className={styles.transactions}>
      {error ? (
        <h2 data-cy="transactions-error-text">{errorText}</h2>
      ) : isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Link
            className={styles.returnButton}
            href="/"
            data-cy="go-back-button"
          >
            <button>Go back</button>
          </Link>
          <TransactionTable
            key="transactions_table"
            data={data}
            rowsPerPage={10}
          />
        </>
      )}
    </div>
  );
}
