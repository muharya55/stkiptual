import Sidebar from 'app/components/sidebar'
import { MenuItems1 } from 'app/data/menu'
import Image from 'next/image'
 type TeamMember = {
  nama: string;
  jabatan: string;
  gambar: string;
  motivasi?: string;
  kategori: string; // ← Tambahkan kategori untuk mengelompokkan
};
const team: TeamMember[] = [
  {
    nama: "Hj. Djohari Rengur",
    jabatan: "Ketua Yayasan Belan La’u Raly",
    gambar: "/images/gallery/ketua_yayasan.jpeg",
    kategori: "Ketua",
  },
  {
    nama: "Yakuba Namsa, S.Pd.I., M.Pd",
    jabatan: "Ketua STKIP",
    gambar: "/images/gallery/ketua_stkip.jpeg",
    kategori: "Ketua",
  },
  {
    nama: "Irma S. Ingratubun, S.Pd., M.Sc",
    jabatan: "Puket I, Bid. Akademik",
    gambar: "/images/foto-Yopi-Tolego.png",
    kategori: "PUKET",
  },
  {
    nama: "Yuliana Kopong, S.Pd., M.Pd",
    jabatan: "Puket II, Bid. Administrasi Umum dan Keuangan",
    gambar: "/images/foto-Yopi-Tolego.png",
    kategori: "PUKET",
  },
  {
    nama: "Lodovika Meci, S.Pd., M.Pd",
    jabatan: "Puket III, Bid. Kemahasiswaan",
    gambar: "/images/foto-Yopi-Tolego.png",
    kategori: "PUKET",
  },
  {
    nama: "Abdul Hamid Warwefubun, S.Pd.",
    jabatan: "Ketua Program Studi PGSD",
    gambar: "/images/foto-Yopi-Tolego.png",
    kategori: "Program Sarjana",
  },
  {
    nama: "Irma S. Ingratubun, S.Pd., M.Sc",
    jabatan: "Ketua Program Studi PGSD",
    gambar: "/images/foto-Yopi-Tolego.png",
    kategori: "Program Sarjana",
  },
  {
    nama: "Mahila Rekol, SE",
    jabatan: "Kepala LPM",
    gambar: "/images/foto-Ferry-Sumual.png",
    kategori: "Lembaga",
  },
  {
    nama: "Cici Claudia N. Ohioner, S.Si",
    jabatan: "Sekretaris LPM",
    gambar: "/images/foto-Ferry-Sumual.png",
    kategori: "Lembaga",
  },
  {
    nama: "Samsul B. Narahaubun, M.Pd",
    jabatan: "Kepala LP2M",
    gambar: "/images/foto-Ferry-Sumual.png",
    kategori: "Lembaga",
  },
  {
    nama: "Fahri Rahanar, S.Sos",
    jabatan: "Sekretaris LP2M",
    gambar: "/images/foto-Ferry-Sumual.png",
    kategori: "Lembaga",
  },
  {
    nama: "Mustova Namsa, SH",
    jabatan: "BAAK",
    gambar: "/images/foto-Ferry-Sumual.png",
    kategori: "Biro",
  },
  {
    nama: "Mufala Warwefubun. S.Pd.I., M.Pd",
    jabatan: "TI",
    gambar: "/images/foto-Ferry-Sumual.png",
    kategori: "Biro",
  },
  {
    nama: "Muhlis Warwefubun, S.Pd.I",
    jabatan: "BAUK",
    gambar: "/images/foto-Ferry-Sumual.png",
    kategori: "Biro",
  },
  {
    nama: "Mirah S. Kobarbun, M.Pd",
    jabatan: "Kepala Perpustakaan",
    gambar: "/images/foto-Ferry-Sumual.png",
    kategori: "Biro",
  },
  // Tambahkan staf BAAK, TI, BAUK sesuai kebutuhan
];

const groupedTeam: Record<string, TeamMember[]> = team.reduce((acc, member) => {
  if (!acc[member.kategori]) acc[member.kategori] = [];
  acc[member.kategori].push(member);
  return acc;
}, {} as Record<string, TeamMember[]>);

const StrukturOrganisasi = () => {
 
  // console.log(groupedTeam);
  
  return (
    <section className="events-details mt-40px mb-80px">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-3 col-lg-4">
            <div className="sidebar sidebar-left">
              <div className="widget">
                <Sidebar data={MenuItems1} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-12 col-lg-9 mb-30px mb-lg-0">
            <h3 className="text-primary fw-bold mb-2">
              Struktur Organisasi STKIP TUAL
            </h3>
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

            {/* Pimpinan (Ketua) */}
            <div className="mb-5">
              {/* <div className="text-center mb-2">
             <h6 className="text-uppercase fw-bold mb-1">Ketua</h6>
              </div> */}

              {Object.entries(groupedTeam).map(([kategori, members]) => (
                  <div key={kategori} className="mb-5">
                    <h5 className="text-center text-uppercase fw-bold mb-4">{kategori}</h5>
                    <div className="row justify-content-center">
                      {members.map((member, index) => (
                        <div key={index} className="col-md-3 text-center mb-4">
                          <Image
                            src={member.gambar}
                            alt={member.nama}
                            width={200}
                            height={100}
                            // style={{
                            //   objectFit: "cover",
                            //   borderRadius: "50%",
                            //   border: "1px solid #ccc",
                            // }}
                            className="mb-2"
                          />
                          <div className="fw-bold">{member.nama}</div>
                          <div className="text-muted small">{member.jabatan}</div>
                          {member.motivasi && (
                            <div className="fst-italic small mt-1">{member.motivasi}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
                
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrukturOrganisasi
