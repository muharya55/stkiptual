import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useKalenderAkademik() {
  const { data, error } = useSWR('/api/kalender-akademik', fetcher);

  return {
    data: data || [],
    isLoading: !data && !error,
    isError: error,
  };
}
