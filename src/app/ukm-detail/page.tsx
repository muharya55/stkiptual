 
// app/data/sidebarMenu.ts

import Image from "next/image";
 
export type MenuItem = {
  label: string;
  href: string;
};
 const ukmList = [
  ['BADMINTON', 'KARATE', 'MADAPALA', 'MUSIK', 'PSM', 'SEPAKBOLA'],
  ['BOLA BASKET', 'KOPMA', 'DECO', 'PMI', 'POROS', 'TAE KWON DO'],
  ['BOLA VOLI', 'LENSA', 'MENWA', 'PRAMUKA', 'SENI TARI'],
];
const UkmDetail: React.FC = () => {

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
                    height={800} alt="Struktur" style={{width:"100%",height:"150%"}} className="mt-2 mb-5" src="/images/gallery/ukm2.png"  />
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

    <section className="py-5 text-white" style={{ backgroundColor: '#003366', backgroundImage: 'url(/background.png)', backgroundSize: 'cover' }}>
      <div className="container text-center">
      <div className="ukm-title-wrapper text-center position-relative mb-5">
        <h2 className="ukm-title fw-bold text-white text-uppercase m-0">Unit Kegiatan Mahasiswa</h2>
      </div>

        <div className="row mt-4 justify-content-center">
          {ukmList.map((column, colIndex) => (
            <div className="col-md-4 mb-3" key={colIndex}>
              {column.map((item, index) => (
                <div
                  key={index}
                  className="border border-light py-2 my-2 text-white fw-bold"
                  style={{ cursor: 'pointer' }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default UkmDetail;
