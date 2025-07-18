'use client';

import { useState } from "react";
import Image from "next/image";
import { useDownload } from "lib/useDownload";

export default function DownloadList() {
  const [page, setPage] = useState(1);
  const { data: downloadData, meta, isLoading, isError } = useDownload(page);

  if (isLoading) return <p className="text-center">Memuat data download...</p>;
  if (isError) return <p className="text-center text-danger">Gagal memuat data download.</p>;
   
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div className="container">
      <div className="row gy-30px mt-5">
        {downloadData?.map((item) => {
          const isLongTitle = item.judul.length > 32 ? { width: "25%" } : { width: "16%" };

          return (
            <div className="col-md-6 mb-3" key={item.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex align-items-center gap-3">
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={48}
                    height={48}
                    className="img-fluid"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.judul}</h6>
                    <small className="text-muted">
                      <i className="fas fa-calendar me-2" />
                      {/* {item.tanggal_upload} */}
                      {new Date(item.tanggal_upload).toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'long', year: 'numeric'
                      })}
                      <i className="fas fa-hdd ms-3 me-2" />
                      {item.ukuran_kb} KB
                    </small>
                  </div>
                  <a
                    href={apiUrl+item.url}
                    className="btn btn-primary btn-sm"
                    download
                    rel="nofollow"
                    style={isLongTitle}
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* PAGINATION */}
      <div className="pagination mt-4 mb-5 text-center">
        <button
          disabled={page <= 1}
          className="pagination-prev pagination__page-numbers"
          onClick={() => setPage((p) => p - 1)}
        >
          <i className="iconify fs-18" data-icon="mingcute:left-line" />
        </button>

        {Array.from({ length: meta?.lastPage || 1 }).map((_, i) => (
          <button
            key={i}
            className={`pagination__page-numbers ${page === i + 1 ? "active" : ""}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page >= (meta?.lastPage || 1)}
          className="pagination-next pagination__page-numbers"
          onClick={() => setPage((p) => p + 1)}
        >
          <i className="iconify fs-18" data-icon="mingcute:right-line" />
        </button>
      </div>
    </div>
  );
}
