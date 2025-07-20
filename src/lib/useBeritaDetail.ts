import useSWR from "swr";

 
const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useBeritaDetail(slug: string) {
  const { data, error } = useSWR(() => (slug ? `/api/artikel/${slug}` : null), fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
