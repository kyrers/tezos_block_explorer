import useSWR from "swr";

export default function useBlockData() {
  const fetcher = (...args: [any]) => {
    return fetch(...args).then((res) => res.json());
  };

  const { data, error, isLoading } = useSWR(`api/tzkt`, fetcher, {
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
