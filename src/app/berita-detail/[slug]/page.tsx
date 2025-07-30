import { Metadata } from 'next';
import BerDetail from 'app/section/berDetail';
import { getBeritaDetail } from 'lib/beritaDetail';
// import Image from 'next/image';

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
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
  const fullImageUrl = `${apiUrl}/storage/${artikel.image}`;
  const artikelUrl = `${baseurl}/berita-detail/${slug}`;

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
  const {slug} = await params;
  const artikel = await getBeritaDetail(slug);
  if (!artikel) return {};
  // console.log(artikel);
  
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <section className="blog-single-simple pt-20px pb-80px">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 mb-30px mb-lg-0">
            <BerDetail artikel={artikel} />
            {/* <div className="blog-single-simple__wrapper">
                  <Image
                    src={`${apiUrl}/storage/${artikel.image}` || '/images/berita/berita-1.jpeg'}
                    alt={artikel.judul}
                    height={200}
                    width={950}
                    unoptimized
                    className="mb-30px"
                    style={{ width: '100%', height: '70%', objectFit: 'cover' }}
                    loading="eager"
                  />
                  <h1 className="fs-30 fw-bolder mb-10px">{artikel.judul}</h1>
                  <div className="text-muted fs-14 mb-20px">
                    {artikel.kategori}{' '}
                    {new Date(artikel.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  <div
                    className="blog-single-simple__brief"
                    dangerouslySetInnerHTML={{ __html: artikel.content }}
                  />
                </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
