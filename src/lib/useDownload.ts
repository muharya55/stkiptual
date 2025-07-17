import useSWR from "swr";
 type DownloadItem = {
  id: number;
  judul: string;
  nama_file: string;
  ekstensi: string;
  ukuran_kb: string;
  tanggal_upload: string;
  url: string;
  icon: string;
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useDownload(page: number) {
  const { data, error } = useSWR<{ data: DownloadItem[]; meta: { lastPage: number } }>(
    `/api/download?page=${page}`,
    fetcher
  );

  return {
    data: data?.data,
    meta: data?.meta,
    isLoading: !data && !error,
    isError: !!error,
  };
}
