  
// app/data/sidebarMenu.ts

import Image from "next/image";
 
 // data.ts
interface DownloadItem {
  title: string;
  icon: string;
  size: string;
  published: string;
  url: string;
}

const downloadData: DownloadItem[] = [
  {
    title: "Surat Peminjaman Alat di PPTIKDF",
    icon: "/images/logo/logopdf.svg",
    size: "215.44 KB",
    published: "2024-01-02",
    url: "https://upy.ac.id/download/surat-peminjaman-alat-di-pptikdf/?wpdmdl=2698&refresh=68672e6e888b71751592558",
  },
  {
    title: "Permohonan Berhenti Kuliah / Mengundurkan Diri",
    icon: "/images/logo/logodokumen.svg",
    size: "32.00 KB",
    published: "2024-01-02",
    url: "https://upy.ac.id/download/permohonan-berhenti-kuliah-mengundurkan-diri/?wpdmdl=2684&refresh=68672e6e8c00b1751592558",
  },
    {
    title: "Format permohonan Cuti Akademik",
    icon: "/images/logo/logopdf.svg",
    size: "31.50 KB",
    published: "2024-01-02",
    url: "https://upy.ac.id/download/format-permohonan-cuti-akademik/?wpdmdl=2691&refresh=68672e6e9e7d81751592558",
  },
  {
    title: "Format permohonan Fotocopy Ijazah/Transkrip",
    icon: "/images/logo/logodokumen.svg",
    size: "27.00 KB",
    published: "2024-01-02",
    url: "https://upy.ac.id/download/format-permohonan-fotocopy-ijazah-transkrip/?wpdmdl=2690&refresh=68672e6ea152e1751592558",
  },
  {
    title: "Format permohonan Ijazah/Akta/Transkrip Hilang atau Rusak",
    icon: "/images/logo/logodokumen.svg",
    size: "31.00 KB",
    published: "2024-01-02",
    url: "https://upy.ac.id/download/format-permohonan-ijazah-akta-transkrip-hilang-atau-rusak/?wpdmdl=2689&refresh=68672e6ea3e501751592558",
  },
  {
    title: "Format Permohonan Surat Keterangan Lulus (SKL)",
    icon: "/images/logo/logodokumen.svg",
    size: "30.50 KB",
    published: "2024-01-02",
    url: "https://upy.ac.id/download/format-permohonan-surat-keterangan-lulus-skl/?wpdmdl=2688&refresh=68672e6ea68251751592558",
  },

  // Tambahkan data lainnya sesuai struktur di atas
];
const Unduhan: React.FC = () => {

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
              Download
            </h1>
          </div>
          
        </div>
      </div>
    </section>

    <div className="container">
      <div className="row gy-30px mt-5">
        {
          downloadData.map((item, index) => {
            const isLongTitle = item.title.length > 32 ?{width:"23%"} : {width:"16%"};

            return (
                <div className="col-md-6 mb-3" key={index}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex align-items-center gap-3">
                      <Image
                      width={200}
                      height={200}
                        src={item.icon}
                        alt="Icon"
                        className="img-fluid"
                        style={{ width: "48px", height: "48px" }}
                      />
                      <div className="flex-grow-1">
                        {/* <h6 className="mb-1">{item.title.length}</h6> */}
                        <h6 className="mb-1">{item.title}</h6>
                        <small className="text-muted">
                          <i className="fas fa-copy me-2" />
                          {item.published}
                          {/* {item.title.length} */}
                          <i className="fas fa-hdd ms-3 me-2" />
                          {item.size}
                        </small>
                      </div>
                      <a
                        href={item.url}
                        className="btn btn-primary btn-sm"
                        rel="nofollow"
                        style={isLongTitle}
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              )
            }
          )
        }
        
      </div>
    </div>

    </>
  );
};

export default Unduhan;
