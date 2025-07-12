 
// app/data/sidebarMenu.ts

import Image from "next/image";

 
const organisasiList: string[] = [
  'DPM F. Agama Islam',
  'BEM F. Agama Islam',
  'HM Bahasa dan Sastra Arab',
  'HM Ilmu Hadis',
  'HM Pend. Agama Islam',
  'HM Perbankan Syariah',
];

const OrmawaDetail: React.FC = () => {

  return (
    <>
    
    <section
      className="faqs-part-two pt-120px pb-130px"
      style={{ backgroundImage: "url(../images/gallery/ilustrasi-section-1.jpg)" }}
    >
      <div className="container">
        <div className="row flex-wrap align-items-center">
          <div className="col-md-12 mb-30px mb-md-0">
            <h1 className=" text-center fw-semibold text-white">
              Kemahasiswaan
            </h1>
          </div>
          
        </div>
      </div>
    </section>

    <div className="container">
      <div className="row gy-30px">
        <div className="col-12 col-lg-6"> 

          <div className="mt-5">
                <Image  width={1500}
                                 height={800} alt="Struktur" style={{width:"100%"}} className="mt-2 mb-5" src="/images/gallery/ormawa2.png"  />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="major-page_view">
             
            {/* <h4 className="fw-semibold mt-30px mb-30px">Biro Kemahasiswaan</h4> */}
            <h3 className="text-primary fw-bold mb-2 mt-5">Unit Kegiatan Mahasiswa</h3>
            <div
              className="border-bottom border-primary"
              style={{
                borderWidth: "3px",
                position: "relative",
                marginBottom: "30px",
              }}
            >
            <div
                style={{
                  width: "100px",
                  height: "3px",
                  backgroundColor: "gold",
                  position: "absolute",
                  bottom: 0,
                }}
              >
            </div>
          </div>
            <p className="mb-10px">
              Unit Kegiatan Mahasiswa (UKM) merupakan wadah aktivitas Mahasiswa yang bertujuan untuk mengembangkan potensi Mahasiswa dan berlatar belakang pada kegiatan yang tidak diperoleh dari perkuliahan. Organisasi ini berada dibawah binaan oleh pembina yang ditunjuk oleh Rektor.
            </p>
             
             
            
              
          </div>
        </div>
        
      </div>
        <div className="mt-5"></div>
        <hr />
        <div className="mt-5"></div>
       
     

      
    </div>
  <section className="py-5">
      <div className="container">
        <div className="position-relative mb-4">
          <h2 className="text-uppercase fw-bold text-primary">
            Organisasi Mahasiswa
          </h2>
          <div
            className="bg-warning position-absolute"
            style={{ height: '4px', width: '100%', bottom: 0 }}
          />
        </div>

         <div className="row g-3">
          {organisasiList.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="bg-warning text-white text-center fw-semibold p-2 rounded">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default OrmawaDetail;
