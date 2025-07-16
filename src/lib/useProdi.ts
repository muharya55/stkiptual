import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProdi() {
  const { data, error } = useSWR('/api/prodi', fetcher);

  return {
    data: data || [],
    isLoading: !data && !error,
    isError: error,
  };
}
