"use client"
import { useBeritaDetail } from "lib/useBeritaDetail";
import Image from "next/image"
import { ReadonlyURLSearchParams } from "next/navigation";

type Props = {
  searchParams: ReadonlyURLSearchParams;
};
const BerDetail = ({ searchParams }: Props) => {
  const slug = searchParams.get('slug') || '';

    const { data :artikel, isLoading, isError } = useBeritaDetail(slug);

    if (isLoading) return <p>Memuat data...</p>;
    if (isError) return <p>Gagal memuat data struktur.</p>;
    if (!artikel) return <p>Data tidak ditemukan.</p>;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <>
       <div className="blog-single-simple__wrapper">
              <Image
                src={`${apiUrl}/storage/${artikel.image}` || '/images/berita/berita-1.jpeg'} 
                alt={artikel.judul}
                height={200}
                width={950}
                className="mb-30px"
                style={{ width: '100%', height: '70%', objectFit: 'cover' }}
                 loading="eager"
              />
              <h1 className="fs-30 fw-bolder mb-10px">{artikel.judul}</h1>
              <div className="text-muted fs-14 mb-20px">
                {artikel.kategori}  {new Date(artikel.created_at).toLocaleDateString('id-ID', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </div>
              <div
                className="blog-single-simple__brief"
                dangerouslySetInnerHTML={{ __html: artikel.content }}
              />
            </div>
    </>
  )
}

export default BerDetail
