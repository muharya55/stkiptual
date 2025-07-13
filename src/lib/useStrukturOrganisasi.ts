import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useStrukturOrganisasi() {
  const { data, error } = useSWR('/api/struktur-organisasi', fetcher);

  return {
    data: data || [],
    isLoading: !data && !error,
    isError: error,
  };
}
