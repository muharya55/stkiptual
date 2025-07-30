import { Metadata } from 'next';
import BerDetail from 'app/section/berDetail';
import { getBeritaDetail } from 'lib/beritaDetail';

export const dynamic = 'force-dynamic';

// interface Props {
//   params: { slug: string };
// }
interface Props {
  params: Promise<{ slug: string }>;
}
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
   const {slug} = await params ;
   const artikel = await getBeritaDetail(slug);
    if (!artikel) return {};

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const fullImageUrl = `${apiUrl}/storage/${artikel.image}`;
  const artikelUrl = `${apiUrl}/berita-detail/${slug}`;

  return {
    title: artikel.judul,
    description: artikel.kategori,
    openGraph: {
      title: artikel.judul,
      description: artikel.kategori,
      url: artikelUrl,
      type: 'article',
      siteName: 'STKIP EVAV TUAL',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: artikel.judul,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: artikel.judul,
      description: artikel.kategori,
      images: [fullImageUrl],
    },
  };
}

export default async function Page({ params }: Props) {
  const {slug} = await params
  return (
    <section className="blog-single-simple pt-20px pb-80px">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 mb-30px mb-lg-0">
            <BerDetail slug={slug} />
          </div>
        </div>
      </div>
    </section>
  );
}
