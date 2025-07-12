import Sidebar from "app/components/sidebar";
import {  MenuItems2 } from "app/data/menu";
 
// app/data/sidebarMenu.ts

export type MenuItem = {
  label: string;
  href: string;
};

interface JadwalAkademik {
  no: number;
  kegiatan: string;
  tanggal: string;
}

const uktList: JadwalAkademik[] = [
  {
    "no": 1,
    "kegiatan": "Registrasi Administrasi bagi mahasiswa lama (pembayaran UKT/SPP)",
    "tanggal": "28 Juli 2025 – 8 Agustus 2025"
  },
  {
    "no": 2,
    "kegiatan": "Registrasi Akademik (pengisian KRS) mahasiswa lama",
    "tanggal": "1 – 10 Agustus 2025"
  },
  {
    "no": 3,
    "kegiatan": "Batas akhir batal tambah dan pembatalan mata kuliah",
    "tanggal": "Kebijakan penentuan tanggal diserahkan Fakultas masing-masing"
  },
  {
    "no": 4,
    "kegiatan": "Pelaksanaan Pengenalan Kehidupan Kampus Mahasiswa Baru Tahun Akademik 2025/2026",
    "tanggal": "11-16 Agustus 2025"
  },
  {
    "no": 5,
    "kegiatan": "Perkuliahan + Ujian Tengah Semester (UTS) + Ujian Akhir Semester (UAS)",
    "tanggal": "18 Agustus – 20 Desember 2025"
  },
  {
    "no": 6,
    "kegiatan": "Rekonsiliasi Data Mahasiswa",
    "tanggal": "15 – 26 September 2025"
  },
  {
    "no": 7,
    "kegiatan": "Pelaporan PD-Dikti Semester Pelaporan 2024.2 dan 2025.1 (maba)",
    "tanggal": "Penentuan tanggal sesuai dengan ketentuan PD-Dikti"
  },
  {
    "no": 8,
    "kegiatan": "Batas akhir pengumuman nilai ujian dan pengisian KHS",
    "tanggal": "2 Januari 2026"
  },
  {
    "no": 9,
    "kegiatan": "Proses evaluasi keberhasilan studi mahasiswa",
    "tanggal": "5 Januari 2026"
  },
  {
    "no": 10,
    "kegiatan": "Batas akhir pelaksanaan Yudisium *)",
    "tanggal": "7 Januari 2026"
  },
  {
    "no": 11,
    "kegiatan": "Batas akhir proses Keputusan keberhasilan studi mahasiswa",
    "tanggal": "9 Januari 2026"
  },
  {
    "no": 12,
    "kegiatan": "Batas akhir Semester Ganjil",
    "tanggal": "10 Januari 2026"
  }
];

const KalenderAkademik = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-xl-3 col-lg-4 mb-4">
          <div className="sidebar sidebar-left">
            <div className="widget">
              <Sidebar data={MenuItems2} />
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="col-12 col-lg-9">
          <h3 className="text-primary fw-bold mb-2">Kalender Akademik</h3>
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
            ></div>
          </div>

          <div className="overflow-scroll" >
           <div className="" style={{width:"max-content"}}>
              <table className="table table-bordered table-stripped text-center" >
                <thead style={{backgroundColor:"#E6F0D9"}}>
                  <tr style={{backgroundColor:"#E6F0D9"}}>
                    <th>No</th>
                    <th>Kegiatan Semester Ganjil</th>
                    <th>Tanggal</th>
                  </tr> 
                </thead>
                <tbody>
                  {uktList.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="text-start">{item.kegiatan}</td>
                      <td className="text-start">{item.tanggal}</td>
                    </tr>
                  ))}
                  <tr>
                    <td><strong> II</strong></td>
                    <td><strong> Kegiatan Semester Genap</strong></td>
                    <td><strong> Tanggal</strong></td>
                  </tr>
                   {uktList.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="text-start">{item.kegiatan}</td>
                      <td className="text-start">{item.tanggal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <table className="table table-bordered table-stripped text-center" >
                <thead style={{backgroundColor:"aliceblue"}}>
                  <tr>
                    <th>No</th>
                    <th>Kegiatan Semester Ganjil</th>
                    <th>Tanggal</th>
                  </tr> 
                </thead>
                <tbody>
                  {uktList.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="text-start">{item.kegiatan}</td>
                      <td className="text-start">{item.tanggal}</td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KalenderAkademik;
