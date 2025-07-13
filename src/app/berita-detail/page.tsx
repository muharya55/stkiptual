import Image from 'next/image';
import React from 'react';

type Artikel = {
  judul: string;
  slug: string;
  kategori: string;
  thumbnail: string;
  content: string;
  created_at: string;
};

interface SearchPageProps {
    searchParams: Promise<{ slug?: string }>; // ✅ searchParams as a Promise
}
export default async function BeritaDetail({ searchParams }: SearchPageProps) {
  const {slug} = await searchParams;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/artikel/${slug}`, {
    cache: 'no-store', // agar selalu fresh
  });

  if (!res.ok) {
    return <p className="text-center">Artikel tidak ditemukan</p>;
  }

  const artikel: Artikel = await res.json();

  return (
    <section className="blog-single-simple pt-20px pb-80px">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 mb-30px mb-lg-0">
            <div className="blog-single-simple__wrapper">
              <Image
                src={artikel.thumbnail || '/images/default.jpg'}
                alt={artikel.judul}
                height={400}
                width={950}
                className="mb-30px"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <h1 className="fs-30 fw-bolder mb-10px">{artikel.judul}</h1>
              <div className="text-muted fs-14 mb-20px">
                {artikel.kategori} · {new Date(artikel.created_at).toLocaleDateString('id-ID', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </div>
              <div
                className="blog-single-simple__brief"
                dangerouslySetInnerHTML={{ __html: artikel.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
