import useSWR from "swr";

 
const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useProdiDetail(slug: string) {
  const { data, error } = useSWR(() => (slug ? `/api/prodi-detail/${slug}` : null), fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
