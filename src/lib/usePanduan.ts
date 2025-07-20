import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function usePanduan() {
  const { data, error } = useSWR('/api/buku-panduan', fetcher);

  return {
    data: data || [],
    isLoading: !data && !error,
    isError: error,
  };
}
