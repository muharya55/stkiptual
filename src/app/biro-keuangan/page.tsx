import Sidebar from "app/components/sidebar";
import {  MenuItems3 } from "app/data/menu";
import Image from "next/image";
 
export type MenuItem = {
  label: string;
  href: string;
};
 
const BiroKeuangan = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-xl-3 col-lg-4 mb-4">
          <div className="sidebar sidebar-left">
            <div className="widget">
              <Sidebar data={MenuItems3} />
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="col-12 col-lg-9">
            <h3 className="text-primary fw-bold mb-2"> Keuangan</h3>
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

          <div className="container">
            <div className="row d-flex justify-content-evenly bg-alice" >
              <div className="col-md-5 mt-4" >
               <strong > <h4 className="mt-2">Kepala Biro</h4></strong>
               <div className="mt-3"></div>
               <div className="">
                <p>Drs. Nana Sujana, M.SI.</p>
                <p>nanasuajana@staff.unsil.ac.id.</p>
                <p>Gd. Rektorat Unsil Jln. Siliwangi No. 24 Kahuripan Tasikmalaya 46115.</p>
                <p>(0265)330634.</p>
               </div>
              </div>
              <div className="col-md-3 mt-4">
                <Image  width={1500}
                          height={800} alt="Struktur" style={{width:"11rem"}} className="mt-2 mb-5" src="/images/nana-sujana.png"  /></div>
            </div>
            <div className="row mt-5">
            Biro Akademik dan Kemahasiswaan (BAK) merupakan unsur pelaksana administrasi yang melaksanakan pelayanan teknis dan administrasi kepada seluruh unsur di lingkungan Sekolah Tinggi Evav Persada Tual. Berkenaan dengan hal tersebut BAK mempunyai tugas melaksanakan pelayanan di bidang akademik dan pembinaan kemahasiswaan dan alumni dengan fungsi terhadap :
            </div>
            <ul className="mt-3">  
              <li>1. Pelaksanakan layanan pendidikan, penelitian dan pengabdian kepada masyarakat</li>
              <li>2. Pelaksanaan layanan pembinaan minat, bakat dan kesejahteraan mahasiswa</li>
              <li>3. Pelaksanaan penyusunan data dan statistik alumni serta urusan alumni lainnya</li>
              <li>4. Melaksanakan update data kelembagaan (izin perguruan tinggi).</li>
              <li>5. Melaksanakan pelaporan kegiatan akademik secara berkala ke Kemenristek Dikti/Kopertis/Kopertais.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiroKeuangan;
