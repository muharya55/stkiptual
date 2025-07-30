import { Metadata } from 'next';
import BerDetail from 'app/section/berDetail';
import { getBeritaDetail } from 'lib/beritaDetail';

export const dynamic = 'force-dynamic';

// interface Props {
//   params: { slug: string };
// }
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
   const artikel = await getBeritaDetail(params.slug);
    // console.log(artikel);
      if (!artikel) return {};

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const fullImageUrl = `${apiUrl}/storage/${artikel.image}`;
  const artikelUrl = `${apiUrl}/berita/${params.slug}`;

  return {
    title: artikel.judul,
    description: artikel.kategori,
    openGraph: {
      title: artikel.judul,
      description: artikel.kategori,
      images: [fullImageUrl],
      url: artikelUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="blog-single-simple pt-20px pb-80px">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 mb-30px mb-lg-0">
            <BerDetail slug={params.slug} />
          </div>
        </div>
      </div>
    </section>
  );
}
