"use client"

import { useArtikelByKategori } from "lib/useArtikel";
import Image from "next/image";
import { useSearchParams ,useRouter } from "next/navigation";
import { useState } from "react";
 
  
function stripHtml(html: string): string {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || '';
}
const ListBerita = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get('q') || '';

  // ✅ Gunakan satu useState untuk form state (page & search)
  const [filter, setFilter] = useState({
    page: 1,
    search: query,
  });

  // Gunakan nilai filter di hook
  const { data: beritadata, meta, isLoading } = useArtikelByKategori(
    'all',
    filter.page,
    5,
    filter.search
  );

  // ✅ Tangani submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = document.getElementById('input-artikel') as HTMLInputElement;
    const keyword = input.value.trim();

    setFilter((prev) => ({
      ...prev,
      search: keyword,
      page: 1, // reset ke page 1 saat search baru
    }));

    // Update URL (optional)
    router.push(`?q=${encodeURIComponent(keyword)}`);
  };
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

 return (
  <>
    <div className="container">
      <button className="courses-filter-mobile cursor-pointer text-uppercase fw-semibold d-block mb-30px d-md-none">
        <span>Filter</span>
      </button>

      <div className="courses-list-v2__wrapper">
        <div className="row">
          <div className="col-12 col-lg-12 mb-30px mb-lg-0">
            <div className="ed-courses-head d-flex flex-wrap align-items-center justify-content-between gap-20px mb-30px">
              <div className="ed-courses-head_view d-flex align-items-center gap-15px">
                <div className="d-flex align-items-center gap-5px">
                  <span className="cursor-pointer courses-view-default courses-view-list transition-all active">
                    <i className="iconify fs-18" data-icon="fa6-solid:list" />
                  </span>
                </div>
                {/* <p className="courses-result">
                  Showing {(meta?.page - 1) * meta.limit + 1} -{" "}
                  {Math.min(meta?.page * meta.limit, meta.total)} of {meta.total} results
                </p> */}


              </div>

              <div className="d-flex flex-wrap align-items-center gap-15px justify-content-between">
                <form className="ed-courses-head_search" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="input-artikel"
                    defaultValue={query}
                    id="input-artikel"
                    placeholder="Cari Artikel ..."
                    className="search-input"
                  />
                  <i className="iconify fs-14 search-icon" data-icon="lucide:search" />
                </form>

                {/* {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <ul>
                    {beritadata?.map((item: any) => (
                      <li key={item.id}>{item.judul}</li>
                    ))}
                  </ul>
                )} */}
              </div>
            </div>
          </div>

          <div className="courses-type list-view">
            {isLoading ? (
              <p>Memuat data...</p>
            ) : Array.isArray(beritadata) && beritadata.length > 0 ? (
              beritadata.map((item) => (
                <article className="courses-layout-1__items" key={item.slug}>
                  <div className="courses-layout-1__thumbnail">
                    <figure className="position-relative">
                      <a href={`/berita-detail?slug=${item.slug}`}>
                        <Image
                          src={
                            item.image
                              ? `${apiUrl}/storage/${item.image}`
                              : "/default-thumbnail.jpg"
                          }
                          alt={item.judul || "Tanpa judul"}
                          width={200}
                          height={70}
                          className="img-courses"
                        />
                      </a>
                      <a
                        href={`/berita-detail?slug=${item.slug}`}
                        className="courses-layout-1__square position-absolute"
                      >
                        <i
                          className="iconify fs-32 text-white"
                          data-icon="la:external-link-square-alt"
                          aria-label="External link"
                        />
                      </a>
                    </figure>
                  </div>

                  <div className="courses-layout-1__content position-relative text-center pt-10px pb-10px pe-20px ps-20px">
                    <h6 className="courses-layout-1__title fs-18 fw-semibold text-capitalize mb-10px pb-10px">
                      <a
                        href={`/berita-detail?slug=${item.slug}`}
                        className="transition-all line-clamp-2"
                      >
                        {item.judul}
                      </a>
                    </h6>

                    <div
                      className="courses-layout-1__desc line-clamp-2 mb-20px w-100"
                      dangerouslySetInnerHTML={{
                        __html: stripHtml(item.content).slice(0, 300) + "...",
                      }}
                    />

                    <div className="courses-layout-1__wrap d-flex flex-wrap align-items-center gap-10px justify-content-between">
                      <div className="d-flex align-items-center gap-10px">
                        <span className="courses-layout-1__lesson d-flex align-items-center gap-5px">
                          <i
                            className="iconify fs-16"
                            data-icon="mdi:tag-text-outline"
                          />
                          <span>{item.kategori || "Tidak ada kategori"}</span>
                        </span>
                        <span className="courses-layout-1__student d-flex align-items-center gap-5px">
                          <i
                            className="iconify fs-20"
                            data-icon="fluent:person-24-regular"
                          />
                          <span>{item.penulis || "Admin"}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p>Tidak ada data yang ditemukan.</p>
            )}

            <div className="pagination mt-4">
              <button
                disabled={filter.page <= 1}
                className="pagination-prev pagination__page-numbers"
                onClick={() =>
                  setFilter((prev) => ({
                    ...prev,
                    page: prev.page - 1,
                  }))
                }
              >
                <i className="iconify fs-18" data-icon="mingcute:left-line" />
              </button>

              {Array.from({ length: meta?.lastPage || 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`pagination__page-numbers ${
                    filter.page === i + 1 ? "active" : ""
                  }`}
                  onClick={() =>
                    setFilter((prev) => ({
                      ...prev,
                      page: i + 1,
                    }))
                  }
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={filter.page >= (meta?.lastPage || 1)}
                className="pagination-next pagination__page-numbers"
                onClick={() =>
                  setFilter((prev) => ({
                    ...prev,
                    page: prev.page + 1,
                  }))
                }
              >
                <i className="iconify fs-18" data-icon="mingcute:right-line" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);




}

export default ListBerita
