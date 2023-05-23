import { useState } from "react";
import useSWR from "swr";

export default function useBlockData() {
  const [hasNoData, setHasNoData] = useState<boolean>(false);
  const [isDecoding, setIsDecoding] = useState<boolean>(false);
  const [blockData, setBlockData] = useState</*NftInfo*/ any[]>();

  const fetcher = (...args: [any]) => {
    setIsDecoding(true);
    return fetch(...args)
      .then((res) => res.json())
      .then((data) => decodeData(data));
  };

  const { error, isLoading } = useSWR(`api/tzkt`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const decodeData = (data: any) => {
    try {
      if (data) {
        console.log(data);
        if (data?.length > 0) {
          setHasNoData(false);
        } else {
          setHasNoData(true);
        }
      }

      setIsDecoding(false);
    } catch (_) {
      setIsDecoding(false);
    }
  };

  return {
    blockData,
    hasNoData,
    isDecoding: isLoading || isDecoding,
    isError: error,
  };
}
