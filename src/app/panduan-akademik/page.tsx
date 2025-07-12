import Sidebar from "app/components/sidebar";
import {  MenuItems2 } from "app/data/menu";
 
// app/data/sidebarMenu.ts

export type MenuItem = {
  label: string;
  href: string;
};
 

const PanduanAkademik = () => {
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
          <h3 className="text-primary fw-bold mb-2">Buku Panduan Akademik</h3>
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
          <div className="container my-5">
            <h5 className="fw-bold text-purple">2025</h5>
            <ol className="mt-3 text-dark-blue">
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS ILMU KOMPUTER : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS EKONOMI DAN SOSIAL : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS SAINS DAN TEKNOLOGI : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK PASCASARJANA : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK UNIVERSITAS : <a href="#">buka link</a>
              </li>
            </ol>
          </div>
          <div className="container my-5">
            <h5 className="fw-bold text-purple">2024</h5>
            <ol className="mt-3 text-dark-blue">
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS ILMU KOMPUTER : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS EKONOMI DAN SOSIAL : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS SAINS DAN TEKNOLOGI : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK PASCASARJANA : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK UNIVERSITAS : <a href="#">buka link</a>
              </li>
            </ol>
          </div>
          <div className="container my-5">
            <h5 className="fw-bold text-purple">2023</h5>
            <ol className="mt-3 text-dark-blue">
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS ILMU KOMPUTER : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS EKONOMI DAN SOSIAL : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK FAKULTAS SAINS DAN TEKNOLOGI : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK PASCASARJANA : <a href="#">buka link</a>
              </li>
              <li>
                BUKU PANDUAN AKADEMIK UNIVERSITAS : <a href="#">buka link</a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PanduanAkademik;
