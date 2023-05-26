import React, { useState } from "react";
import styles from "@/styles/TransactionTable.module.css";
import usePagedTable from "@/hooks/usePagedTable";
import TableFooter from "../../common/table/TableFooter";
import { TransactionData } from "@/model/TransactionData";

export default function TransactionTable({
  data,
  rowsPerPage,
}: {
  data: any[];
  rowsPerPage: number;
}) {
  const [page, setPage] = useState(1);
  const { slice, range } = usePagedTable(data, page, rowsPerPage);

  return (
    <>
      <table className={styles.transactionTable} data-cy="transactions-table">
        <thead>
          <tr data-cy="transactions-table-header-row">
            <th>Sender</th>
            <th>Target</th>
            <th>Amount (tez)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {slice?.map((elem: TransactionData) => (
            <tr key={elem.id} data-cy={`transactions-table-row-${elem.id}`}>
              <td>
                <b>Alias:</b> {elem.sender?.alias} <br />
                <b>Address:</b> {elem.sender?.address}
              </td>
              <td>
                <b>Alias:</b> {elem.target?.alias} <br />
                <b>Address:</b> {elem.target?.address}
              </td>
              <td>
                <b>{elem.amount}</b>
              </td>
              <td>
                <b>{elem.status}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
}
