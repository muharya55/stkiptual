import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useFakultas() {
  const { data, error } = useSWR('/api/fakultas', fetcher);

  return {
    data: data || [],
    isLoading: !data && !error,
    isError: error,
  };
}
