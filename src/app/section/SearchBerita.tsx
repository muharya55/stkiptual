"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const SearchBerita = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keyword = inputRef.current?.value.trim();

    if (keyword) {
      // Trigger klik pada elemen dengan class "search-wrapper"
      const wrapper = document.querySelector(".search-wrapper") as HTMLElement;
      if (wrapper) {
        wrapper.click();
      }

      // Redirect ke halaman berita dengan query
      router.push(`/berita-list?q=${encodeURIComponent(keyword)}`);
    }
  };


  return (
    <>
      <div className="search-wrapper">
        <div className="search-overlay" />
        <div className="search-popup">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="search-input"
              name="search"
              placeholder="Cari Halaman ..."
              ref={inputRef}
            />
            <button type="submit">
              <i
                className="iconify fs-22 text-white eye-on search-popup_icon"
                data-icon="iconamoon:search"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBerita;
