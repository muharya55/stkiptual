import BerDetail from 'app/section/berDetail';
import { Suspense } from 'react';
 
export default async function BeritaDetail( ) {
  
    // const slug = params.slug || '';
  
    return (
      <section className="blog-single-simple pt-20px pb-80px">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 mb-30px mb-lg-0">
              <Suspense fallback={<p>Memuat halaman berita...</p>}>
                <BerDetail />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    );
   
}
