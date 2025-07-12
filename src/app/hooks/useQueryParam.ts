'use client';

import { useRouter, useSearchParams } from 'next/navigation';

/**
 * Hook untuk mengatur dan menghapus query parameter di Next.js App Router
 */
export function useQueryParam() {
  const router = useRouter();
  const searchParams = useSearchParams();

  /**
   * Menambahkan atau mengganti query param
   * @param key - Nama parameter
   * @param value - Nilai parameter
   */
  const setQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  /**
   * Menghapus query param berdasarkan key
   * @param key - Nama parameter yang ingin dihapus
   */
  const removeQueryParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    const queryString = params.toString();
    router.replace(queryString ? `?${queryString}` : '/', { scroll: false });
  };

  /**
   * Cek apakah query param dengan key tertentu ada
   * @param key - Nama parameter yang ingin dicek
   * @returns true jika param ada, false jika tidak
   */
  const hasQueryParam = (key: string): boolean => {
    return searchParams.has(key);
  };

  return { setQueryParam, removeQueryParam, hasQueryParam };
}
