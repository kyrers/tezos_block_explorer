import { useState, useEffect } from "react";

export default function usePagedTable(
  data: any[],
  page: number,
  rowsPerPage: number
) {
  const [tableRange, setTableRange] = useState<number[]>();
  const [slice, setSlice] = useState<any[]>();

  useEffect(() => {
    if (data) {
      const range = calculateRange(data, rowsPerPage);
      setTableRange([...range]);

      const slice = sliceData(data, page, rowsPerPage);
      setSlice([...slice]);
    }
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
}

const calculateRange = (data: any[], rowsPerPage: number) => {
  const range = [];
  const num = Math.ceil(data?.length / rowsPerPage);
  let i = 1;

  for (let i = 1; i <= num; i++) {
    range.push(i);
  }

  return range;
};

const sliceData = (data: any[], page: number, rowsPerPage: number) => {
  return data?.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};
