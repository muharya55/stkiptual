'use client';

import Image from 'next/image';
import Aside from 'app/components/aside';
import { useState } from 'react';
import { useArtikelByKategori } from 'lib/useArtikel';
 
const BeritaSection: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, meta, isLoading } = useArtikelByKategori("Pengumuman", page, 6);

  return (
    <section className="uni-campus pt-80px pb-80px">
      <div className="container">
        <div className="row gy-30px">
          <div className="col-12 col-lg-8 mb-30px mb-lg-0">
            <h3 className="fs-22 text-uppercase fw-semibold mb-14px">Berita</h3>

            {isLoading ? <p>Memuat data...</p> : (
              <div className="row">
                {data.map((item: any) => (
                  <div key={item.slug} className="col-12 col-sm-6 col-md-6 col-lg-4 mt-3">
                    <div className="campus-items">
                      <a href={`/berita-detail?slug=${item.slug}`}>
                        <Image
                          // src={item.thumbnail || '/images/default.jpg'}
                          src={'/images/berita/berita-1.jpeg'}
                          alt={`Image of ${item.judul}`}
                          width={300}
                          height={200}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </a>
                      <div className="campus-items-box pt-20px">
                        <h6 className="fw-bolder mb-5px">
                          <a href={`/berita-detail?slug=${item.slug}`} className="transition-all">
                            {item.judul}
                          </a>
                        </h6>
                        <p className="mb-10px">{item.kategori}</p>
                        <a href={`/berita-detail?slug=${item.slug}`} className="fs-14 fw-medium transition-all text-uppercase text-biru">
                          Baca Selengkapnya
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                <div className="pagination mt-4">
                  <button
                    disabled={page <= 1}
                    className="pagination-prev pagination__page-numbers"
                    onClick={() => setPage(p => p - 1)}
                  >
                    <i className="iconify fs-18" data-icon="mingcute:left-line" />
                  </button>

                  {Array.from({ length: meta?.lastPage || 1 }).map((_, i) => (
                    <button
                      key={i}
                      className={`pagination__page-numbers ${page === i + 1 ? 'active' : ''}`}
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    disabled={page >= (meta?.lastPage || 1)}
                    className="pagination-next pagination__page-numbers"
                    onClick={() => setPage(p => p + 1)}
                  >
                    <i className="iconify fs-18" data-icon="mingcute:right-line" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <Aside />
        </div>
      </div>
    </section>
  );
};

export default BeritaSection;
