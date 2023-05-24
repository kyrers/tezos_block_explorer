import React, { Dispatch, SetStateAction, useEffect } from "react";
import styles from "@/styles/TableFooter.module.css";

export default function TableFooter({
  range,
  setPage,
  page,
  slice,
}: {
  range: number[] | undefined;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  slice: any[] | undefined;
}) {
  useEffect(() => {
    if ((slice?.length ?? 0) < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className={styles.tableFooter}>
      {range?.map((el, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
