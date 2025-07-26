"use client"

import useSWR from "swr";

const VideoSection: React.FC = () => {
  const { data , isLoading } = useSWR('/api/utilities', null)  ;
 
  if (!data || isLoading  ) return <p>Memuat data...</p>; 
  const hasil = data?.filter((item: {slug:string}) => item.slug ==='video-url' ||item.slug ==='video-content');
  const url = hasil.find((item: {slug:string}) => item.slug==='video-url')
  const content = hasil.find((item: {slug:string}) => item.slug==='video-content')

  return (
    <>
      <section className="gallery-page mt-40px mb-80px mt-3">
        <div className="container">
          <div className="row gy-30px grid-gallery">
             <div className="col-md-6">
              <h3>Profil Kampus</h3>
              <div className="">
                <div dangerouslySetInnerHTML={{ __html: content?.data }} />

              </div>
              {/* <p className="mt-3">Webiste Biro Keuangan hadir sebagai media informasi terkait profil Kantor Keuangan, khususnya layanan administrasi keuangan untuk segenap sivitas akademik Universitas Muhammadiyah Sumatera Utara, mencakup fakultas, program studi, unit, dan mahasiswa. Beberapa informasi penunjang yang sejalan dengan core business Kantor Keuangan juga disediakan, antara lain: ketentuan registrasi, ketentuan dispensasi, standard operational procedure (SOP) layanan administrasi keuangan, dll.</p> */}
             </div>
             <div className="col-md-6 d-flex justify-content-end"> 
                <iframe
                    // ref={null}
                    className="course-details-img mb-30 w-100 "
                    // style={{ backgroundImage: "url(/assets/img/course/details/01.jpg)" }}
                    src={`https://www.youtube.com/embed/${url.data?.replace(/<\/?[^>]+(>|$)/g, "")}?feature=oembed`}
                >
                </iframe>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
