 
// app/data/sidebarMenu.ts

import Image from "next/image";
import Link from "next/link";

export type MenuItem = {
  label: string;
  href: string;
};
 
const Kemahasiswaan = () => {
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
            height={800} alt="Struktur"  style={{width:"100%"}} className="mt-2 mb-5" src="/images/gallery/kemahasiswaan-1.png"  />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="major-page_view">
             
            {/* <h4 className="fw-semibold mt-30px mb-30px">Biro Kemahasiswaan</h4> */}
            <h3 className="text-primary fw-bold mb-2 mt-5">Komunitas</h3>
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
              STKIP Evav TUAL  memiliki berbagai komunitas yang dibentuk oleh mahasiswa untuk mengasah bakat dan minat.  Komunitas itu ada yang terbentuk oleh latar belakang keilmuan masing-masing mahasiswa mau pun yang terbentuk karena kegemaran akan minat tertentu oleh setiap mahasiswa tanpa melihat latar belakang keilmuan. Adapun komunitas mahasiswa yang terbentuk berdasarkan latar belakang keilmuan dan komunitas mahasiswa yang terbentuk atas dasar kegemaran tanpa melihat latar belakang keilmuan tertentu.
            </p>
             
             
            
              
          </div>
        </div>
        
      </div>
        <div className="mt-5"></div>
        <hr />
        <div className="mt-5"></div>
      <div className="row">
                <div className="col-12 col-lg-6">
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
                  <p className="mb-10px ">
                      Unit Kegiatan Mahasiswa (UKM) merupakan wadah aktivitas Mahasiswa yang bertujuan untuk mengembangkan potensi Mahasiswa dan berlatar belakang pada kegiatan yang tidak diperoleh dari perkuliahan. Organisasi ini berada dibawah binaan oleh pembina yang ditunjuk oleh Rektor.
                    </p>
                     <Link href="/ukm-detail" className="uni-button transition-all text-white">
                    
                    Selengkapnya
                  </Link>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="mt-5">
                    <Image  width={1500}
                    height={800} alt="Struktur" style={{width:"100%",height:"150%"}} className="mt-2 mb-5" src="/images/gallery/ukm2.png"  />
                  </div>
                </div>
      </div>
      <div className="row">
                <div className="col-12 col-lg-6">
                   <h3 className="text-primary fw-bold mb-2 mt-5">Organisasi Mahasiswa</h3>
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
                      Organisasi Mahasiswa (ORMAWA) merupakan wadah organisasi Mahasiswa yang bertujuan untuk mengembangkan potensi Mahasiswa. Organisasi ini berada dibawah binaan oleh Fakultas dan Program Studi masing-masing.
                    </p>
                     <Link href="/ormawa-detail" className="uni-button transition-all text-white">
                    
                    Selengkapnya
                  </Link>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="mt-5">
                    <Image  width={1500}
                    height={800} alt="Struktur" style={{width:"100%"}} className="mt-2 mb-5" src="/images/gallery/ormawa2.png"  />
                  </div>
                </div>
      </div>

      
    </div>

    </>
  );
};

export default Kemahasiswaan;
