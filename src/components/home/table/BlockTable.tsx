import React, { useState } from "react";
import styles from "@/styles/BlockTable.module.css";
import usePagedTable from "@/hooks/usePagedTable";
import TableFooter from "../../common/TableFooter";
import { useRouter } from "next/router";
import { BlockData } from "@/model/BlockData";

export default function BlockTable({
  data,
  rowsPerPage,
}: {
  data: any[];
  rowsPerPage: number;
}) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { slice, range } = usePagedTable(data, page, rowsPerPage);

  return (
    <>
      <table className={styles.blockTable}>
        <thead>
          <tr>
            <th>Level</th>
            <th>Proposer</th>
            <th>Transactions</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {slice?.map((elem: BlockData) => (
            <tr
              key={elem.level}
              onClick={() => {
                router.push(`block/${elem.level}`);
              }}
            >
              <td>
                <b>{elem.level}</b>
              </td>
              <td>
                <b>Alias:</b> {elem.proposer?.alias} <br />
                <b>Address:</b> {elem.proposer?.address}
              </td>
              <td>
                <b>{elem.transactionCount}</b>
              </td>
              <td>
                <b>{elem.timestamp}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
}
