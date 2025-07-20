import ListBerita from "app/components/ListBerita"
import { Suspense } from "react";

 export const dynamic = 'force-dynamic'; // <- WAJIB

const Page = () => {
  return (
    <>
        <section className="courses-page courses-list-v2 mt-30px mb-80px">
              <Suspense fallback={<p>Memuat halaman berita...</p>}>
                <ListBerita/>
             </Suspense>
        </section>

    </>
  )
}

export default Page
