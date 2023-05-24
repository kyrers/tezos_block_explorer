import useSWR from "swr";

export default function useTransactionData(level: number) {
  const fetcher = (...args: [any]) => {
    return fetch(...args).then((res) => res.json());
  };

  const { data, error, isLoading } = useSWR(`/api/blocks/${level}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error,
  };
}
