import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useArtikelByKategori(kategori: string, page = 1, limit = 6) {
  const params = new URLSearchParams({
    kategori,
    page: String(page),
    limit: String(limit),
  });

  const { data, error } = useSWR(`/api/artikel?${params}`, fetcher);

  return {
    data: data?.data || [],
    meta: data?.meta,
    isLoading: !data && !error,
    isError: error,
  };
}
