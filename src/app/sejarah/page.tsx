import Sidebar from 'app/components/sidebar'
import { MenuItems1 } from 'app/data/menu'
 
const Sejarah = () => {
  return (
    <>
     <section className="events-details mt-40px mb-80px">
        <div className="container">
          <div className="row mt-5">
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar sidebar-left">
                <div className="widget">
                  <Sidebar data={MenuItems1} />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-12 col-lg-9 mb-30px mb-lg-0">
               
            <h3 className="text-primary fw-bold mb-2">Sejarah STKIP Persada Evav Tual</h3>
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
              <div className="events-details__wrapper d-flex flex-wrap">
                <div className="text-justify mb-5" style={{ lineHeight: "27px" }}>
                  <p style={{ textIndent: 50 }}>
                    Sekolah Tinggi Keguruan dan Ilmu Pendidikan (STKIP) Persada Evav Tual merupakan salah satu perguruan tinggi swasta di daerah Kei, Maluku. Kampus ini didirikan pada tahun 2021 di bawah naungan Yayasan Belan La’u Raly. Yayasan ini berorientasi untuk mengembangkan bidang pendidikan.
                  </p>

                  <p style={{ textIndent: 50 }}>
                    STKIP Persada Evav Tual memiliki satu program studi yakni Pendidikan Guru Sekolah Dasar (PGSD) di bawah naungan Lembaga Layanan Pendidikan Tinggi (LLDikti) wilayah XII Maluku, Maluku Utara. Perguruan tinggi ini terletak di Jalan Pasar Rakyat BTN Kel. Lodar El, Kecamatan Pulau Dullah Selatan, Kota Tual. Lokasi kampus cukup strategis karena dekat dengan pusat kota sehingga transportasi mudah ditempuh.
                  </p>

                  <p style={{ textIndent: 50 }}>
                    Berdirinya STKIP Persada Evav Tual dilatarbelakangi oleh kebutuhan tenaga pendidik di sekolah-sekolah negeri maupun swasta di wilayah Kabupaten dan Kota Tual. Keprihatinan ini mendorong Bapak Yakuba Namsa, Ketua Yayasan Belan La’u Raly, untuk membuka STKIP Persada Evav Tual sebagai jawaban atas rentang kendali dan kebutuhan pendidikan di daerah tercinta ini.
                  </p>

                  <p style={{ textIndent: 50 }}>
                    Bapak Yakuba Namsa adalah seorang guru PNS yang bertugas sebagai kepala sekolah di Kei Besar. Ketika anak-anak menyelesaikan pendidikan di jenjang dasar, mereka harus melanjutkan pendidikan tinggi di luar daerah Kei. Untuk itu mereka harus berlayar menuju Kei Kecil, Langgur. Suatu ketika, dalam perjalanan mengantar anak-anak ke Langgur bersama ibunya, kapal yang mereka tumpangi tenggelam akibat cuaca ekstrem. Peristiwa tragis ini merenggut nyawa ibu kandung beliau. Tragedi inilah yang menjadi pemicu semangat beliau untuk menghadirkan perguruan tinggi di wilayah Kei.
                  </p>

                  <p style={{ textIndent: 50 }}>
                    Pada bulan Maret 2017, beliau menyampaikan hasratnya kepada pengurus PGRI Kabupaten Maluku Tenggara untuk mendirikan STKIP Persada Evav Tual. Hasil diskusi ini melahirkan rekomendasi sebagai dasar proses pendirian. Cita-cita untuk mencerdaskan kehidupan bangsa, khususnya di daerah Kei, akhirnya terwujud.
                  </p>

                  <p style={{ textIndent: 50 }}>
                    Pengusulan awal dilakukan melalui Silimkerma Dikti. Setelah melalui beberapa tahapan, atas rahmat Tuhan Yang Maha Kuasa, terbitlah Surat Keputusan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia Nomor: <strong>206/E/O/2021</strong> tentang pendirian STKIP Persada Evav Tual.
                  </p>

                  <p style={{ textIndent: 50 }}>
                    Selanjutnya, Bapak Yakuba Namsa menerima surat pemberitahuan dari LLDikti Wilayah XII Maluku dan Maluku Utara dengan nomor: <strong>913/LL12/AK/2021</strong> tertanggal 22 Juni 2021. Berdasarkan surat ini, pada tanggal 30 Juni 2021 di Hotel Kimson, Kabupaten Maluku Tenggara, Sekretaris LLDikti Wilayah XII, Bapak Dr. Jantje E. Lekatompessy, SE., M.Si., Ak., CA menyerahkan langsung surat pendirian kepada Bapak Yakuba Namsa. Penyerahan ini disaksikan oleh para guru, tokoh agama, tokoh adat, serta perwakilan dari pemerintah Kota Tual dan Kabupaten Maluku Tenggara.
                  </p>

                  <p style={{ textIndent: 50 }}>
                    Berdasarkan surat pendirian tersebut dan berlandaskan peraturan perundangan yang berlaku, disusunlah Statuta STKIP Persada Evav Tual. Statuta ini menjadi pedoman dasar dalam mengembangkan potensi intelektual, merancang tata kelola organisasi, mengembangkan program, serta melaksanakan kegiatan Tri Dharma Perguruan Tinggi.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>

  )
}

export default Sejarah
