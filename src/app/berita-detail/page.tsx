import BerDetail from 'app/section/berDetail';

type Artikel = {
  judul: string;
  slug: string;
  kategori: string;
  thumbnail: string;
  image: string;
  content: string;
  created_at: string;
};

interface SearchPageProps {
  searchParams: Promise<{ slug?: string }>;
}

export default async function BeritaDetail({ searchParams }: SearchPageProps) {
  try {
    const { slug } = await searchParams;

    if (!slug) {
      return <p className="text-center">Slug tidak ditemukan</p>;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/artikel/${slug}`, {
      cache: 'no-store',
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
              <BerDetail artikel={artikel} />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error saat render berita detail:", error);
    return <p className="text-center">Terjadi kesalahan saat memuat artikel</p>;
  }
}
