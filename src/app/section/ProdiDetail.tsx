"use client"
import { useProdiDetail } from "lib/useProdiDetail";
import Image from "next/image"
import { useSearchParams } from "next/navigation";
 

const ProdiDetail = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get('slug') ||''; 
    // console.log(slug);
    // console.log(prodi);

    const { data :prodi, isLoading, isError } = useProdiDetail(slug);

    if (isLoading) return <p>Memuat data...</p>;
    if (isError) return <p>Gagal memuat data struktur.</p>;
    if (!prodi) return <p>Data tidak ditemukan.</p>;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    
  return (
    <>
       <div className="blog-single-simple__wrapper">
              <Image
                src={`${apiUrl}/storage/${prodi.image}` || '/images/berita/berita-1.jpeg'} 
                alt={prodi.nama}
                height={150}
                width={750}
                unoptimized
                className="mb-30px"
                style={{ width: '100%', height: '70%', objectFit: 'cover' }}
                 loading="eager"
              />
              <h1 className="fs-30 fw-bolder mb-10px">{prodi.nama}</h1>
              {/* <div className="text-muted fs-14 mb-20px">
                {new Date(prodi.created_at).toLocaleDateString('id-ID', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </div> */}
              <div
                className="blog-single-simple__brief"
                dangerouslySetInnerHTML={{ __html: prodi.content }}
              />
            </div>
    </>
  )
}

export default ProdiDetail
