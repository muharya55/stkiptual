import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useListUkm() {
  const { data, error } = useSWR('/api/listukm', fetcher);

  return {
    data: data || [],
    isLoading: !data && !error,
    isError: error,
  };
}
