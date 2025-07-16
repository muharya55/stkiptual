import Sidebar from "app/components/sidebar";
import {  MenuItems3 } from "app/data/menu";
import BiroSection from "app/section/BiroSection";
import Image from "next/image";
 
// app/data/sidebarMenu.ts

export type MenuItem = {
  label: string;
  href: string;
};
 
const BiroAkademik = () => {
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
            <h3 className="text-primary fw-bold mb-2">Biro Akademik</h3>
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

          <BiroSection slug="biro-akademik"/>
        </div>
      </div>
    </div>
  );
};

export default BiroAkademik;
