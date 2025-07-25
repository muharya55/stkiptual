import useSWR from "swr";

 
const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useUtilities(slug: string) {
  const { data, error } = useSWR(() => (slug ? `/api/utilities/${slug}` : null), fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
export function useAllUtilities() {
  const { data, error } = useSWR('/api/utilities', fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
