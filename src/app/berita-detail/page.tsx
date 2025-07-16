import BerDetail from 'app/section/berDetail';
 
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
  // console.log({searchParams});

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
            <BerDetail artikel={artikel}/>
          </div>
        </div>
      </div>
    </section>
  );
}
