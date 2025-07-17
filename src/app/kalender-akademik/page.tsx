import Sidebar from "app/components/sidebar";
import {  MenuItems2 } from "app/data/menu";
import Kaldemik from "app/section/Kaldemik";
 
// app/data/sidebarMenu.ts

export type MenuItem = {
  label: string;
  href: string;
};
 
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
                
                <Kaldemik/>
                {/* <tbody>
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
                </tbody> */}
            
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
