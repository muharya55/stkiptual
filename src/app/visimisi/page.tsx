import Sidebar from 'app/components/sidebar'
import { MenuItems1 } from 'app/data/menu'
 
const StrukturOrganisasi = () => {
  return (
    <>
      <section className="events-details mt-40px mb-80px">
           <div className="container">
             <div className="row">
               <div className="col-xl-3 col-lg-4">
                <div className="sidebar sidebar-left">
                  <div className="widget">
                  
                    <Sidebar data={MenuItems1} />
                     
                  </div>
                </div>
         </div>
   
   
         <div className="col-12  col-lg-9 mb-30px mb-lg-0">
              {/* <h1 className="fs-30 fw-semibold mb-40px">
    Visi, Misi, Tujuan, dan Strategi STKIP Persada Evav Tual
  </h1> */}

  {/* Visi */}
  <h3 className="text-primary fw-bold mb-2">Visi , Misi dan Sasaran STKIP Persada Evav Tual</h3>
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
  <h2 className="fs-20 fw-semibold mb-40px text-biru" style={{ color: "#356DF1" }}>
    <strong>Visi STKIP Persada Evav Tual</strong>
  </h2>
  <div className="text-justify mb-4">
    Menjadi Perguruan Tinggi Keguruan yang Unggul, Berdaya Saing, Beriman dan Berbudaya pada Tahun 2035.
  </div>

  {/* Misi */}
  <h2 className="fs-20 fw-semibold mb-40px mt-5 text-biru" style={{ color: "#356DF1" }}>
    <strong>Misi STKIP Persada Evav Tual</strong>
  </h2>
  <div className="text-justify mb-4">
    <ul style={{ lineHeight: "27px" }}>
      <li>1. Menyelenggarakan pendidikan yang profesional.</li>
      <li>2. Melaksanakan penelitian di bidang ilmu pendidikan dengan melibatkan semua unsur civitas akademika.</li>
      <li>3. Melaksanakan pengabdian dan pemberdayaan masyarakat yang kreatif, inovatif, dan solutif.</li>
      <li>4. Menciptakan iklim kampus yang kondusif dan berdaya saing di bidang keilmuan pendidikan.</li>
      <li>5. Mewujudkan civitas akademika yang beriman dan bertakwa kepada Tuhan Yang Maha Esa.</li>
      <li>6. Mewujudkan budaya kampus yang berpendidikan karakter berbasis kearifan lokal.</li>
    </ul>
  </div>

  {/* Tujuan */}
  <h2 className="fs-20 fw-semibold mb-40px mt-5 text-biru" style={{ color: "#356DF1" }}>
    <strong>Tujuan STKIP Persada Evav Tual</strong>
  </h2>
  <div className="text-justify mb-4">
    <ul style={{ lineHeight: "27px" }}>
      <li>1. Menghasilkan lulusan yang beriman dan bertakwa serta memiliki kompetensi pendidik dalam mengajar, membina, dan mampu berkembang secara profesional.</li>
      <li>2. Menghasilkan karya akademik dalam bidang ilmu pengetahuan dan teknologi serta kependidikan yang bermutu.</li>
      <li>3. Terwujudnya sivitas akademika yang berpikir kritis, kreatif, dan inovatif.</li>
      <li>4. Menghasilkan sivitas akademika yang peduli terhadap permasalahan yang berkembang di masyarakat dan memberi solusi berdasarkan kajian ilmiah.</li>
      <li>5. Terwujudnya penelitian dan pengabdian kepada masyarakat melalui penerapan ilmu pengetahuan dan teknologi untuk mencapai masyarakat mandiri, sejahtera, serta mencerdaskan kehidupan bangsa pada tingkat lokal maupun nasional.</li>
      <li>6. Terbentuknya perilaku akademis, religius, dan nasionalis di lingkungan kampus.</li>
    </ul>
  </div>

  {/* Strategi */}
  <h2 className="fs-20 fw-semibold mb-40px mt-5 text-biru" style={{ color: "#356DF1" }}>
    <strong>Strategi STKIP Persada Evav Tual</strong>
  </h2>
  <div className="text-justify mb-4">
    <ul style={{ lineHeight: "27px", textAlign: "justify" }}>
      <li>1. Mendorong dosen menyelesaikan S3 pada tahun 2035, mendapatkan sertifikasi dosen dan jabatan fungsional pada posisi Lektor Kepala (60% dari keseluruhan dosen tetap Yayasan).</li>
      <li>2. Mendorong serta memfasilitasi dosen dan mahasiswa dalam publikasi karya ilmiah pada bidang ilmu pendidikan.</li>
      <li>3. Mendukung dan memfasilitasi kegiatan peningkatan kapasitas dosen dan mahasiswa untuk berpikir kritis, kreatif, dan inovatif.</li>
      <li>4. Mendukung aktivitas kajian-kajian sosial masyarakat di lingkungan kampus terkait isu-isu yang berkembang di masyarakat sekitar.</li>
      <li>5. Mendorong dan memfasilitasi kegiatan penelitian dan PkM yang berfokus pada peningkatan kualitas sumber daya manusia yang mandiri dan sumber daya alam yang bernilai ekonomis di masyarakat sekitar.</li>
      <li>6. Mendorong terciptanya iklim akademik yang religius dan nasionalis melalui peraturan akademik dan konten pembelajaran.</li>
    </ul>
  </div>

  <div className="events-details__wrapper d-flex flex-wrap"></div>
         </div>
          
       </div>
     </div>
   </section>
    </>

  )
}

export default StrukturOrganisasi
