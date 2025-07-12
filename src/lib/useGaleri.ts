import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useGaleri() {
  const { data, error } = useSWR('/api/galeri', fetcher);

  return {
    data: data || [],
    isLoading: !data && !error,
    isError: error,
  };
}
