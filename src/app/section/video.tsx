
const VideoSection: React.FC = () => {
  return (
    <>
      <section className="gallery-page mt-40px mb-80px mt-3">
        <div className="container">
          <div className="row gy-30px grid-gallery">
             <div className="col-md-6">
              <h3>Profil Kampus</h3>
              <p className="mt-3">Webiste Biro Keuangan hadir sebagai media informasi terkait profil Kantor Keuangan, khususnya layanan administrasi keuangan untuk segenap sivitas akademik Universitas Muhammadiyah Sumatera Utara, mencakup fakultas, program studi, unit, dan mahasiswa. Beberapa informasi penunjang yang sejalan dengan core business Kantor Keuangan juga disediakan, antara lain: ketentuan registrasi, ketentuan dispensasi, standard operational procedure (SOP) layanan administrasi keuangan, dll.</p>
             </div>
             <div className="col-md-6 d-flex justify-content-end"> 
                <iframe
                    // ref={null}
                    className="course-details-img mb-30 w-100 "
                    // style={{ backgroundImage: "url(/assets/img/course/details/01.jpg)" }}
                    src="https://www.youtube.com/embed/Y2RzKxMwwxk?feature=oembed"
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
