import Sidebar from "app/components/sidebar";
import {  MenuItems2 } from "app/data/menu";
import BiayaPendidikan from "app/section/BiayaPendidikan";
 
// app/data/sidebarMenu.ts

export type MenuItem = {
  label: string;
  href: string;
};

// type UktData = {
//   programStudi: string;
//   ukt: {
//     [semester: string]: string;
//   };
// };

// const uktList: UktData[] = [
//   {
//     programStudi: "Pendidikan Bahasa dan Sastra Indonesia",
//     ukt: {
//       I: "500.000", II: "1.000.000", III: "2.000.000", IV: "3.000.000",
//       V: "4.000.000", VI: "5.000.000", VII: "6.000.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Bahasa Inggris",
//     ukt: {
//       I: "500.000", II: "1.000.000", III: "2.000.000", IV: "3.000.000",
//       V: "4.000.000", VI: "5.000.000", VII: "6.000.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Biologi",
//     ukt: {
//       I: "600.000", II: "1.200.000", III: "2.400.000", IV: "3.600.000",
//       V: "4.800.000", VI: "6.000.000", VII: "7.200.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Fisika",
//     ukt: {
//       I: "550.000", II: "1.100.000", III: "2.200.000", IV: "3.300.000",
//       V: "4.400.000", VI: "5.500.000", VII: "6.600.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Kimia",
//     ukt: {
//       I: "600.000", II: "1.100.000", III: "2.200.000", IV: "3.300.000",
//       V: "4.400.000", VI: "5.500.000", VII: "6.600.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Matematika",
//     ukt: {
//       I: "550.000", II: "1.000.000", III: "2.000.000", IV: "3.000.000",
//       V: "4.000.000", VI: "5.000.000", VII: "6.000.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Ekonomi",
//     ukt: {
//       I: "500.000", II: "1.000.000", III: "2.000.000", IV: "3.000.000",
//       V: "4.000.000", VI: "5.000.000", VII: "6.000.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Pancasila dan Kewarganegaraan",
//     ukt: {
//       I: "500.000", II: "1.000.000", III: "2.000.000", IV: "3.000.000",
//       V: "4.000.000", VI: "5.000.000", VII: "6.000.000",
//     },
//   },
//   {
//     programStudi: "Mata Kuliah Umum",
//     ukt: {
//       I: "400.000", II: "800.000", III: "1.200.000", IV: "1.600.000",
//       V: "2.000.000", VI: "2.400.000", VII: "2.800.000",
//     },
//   },
//   {
//     programStudi: "Teknologi Pendidikan",
//     ukt: {
//       I: "550.000", II: "1.100.000", III: "2.200.000", IV: "3.300.000",
//       V: "4.400.000", VI: "5.500.000", VII: "6.600.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Guru Sekolah Dasar (PGSD)",
//     ukt: {
//       I: "600.000", II: "1.200.000", III: "2.400.000", IV: "3.600.000",
//       V: "4.800.000", VI: "6.000.000", VII: "7.200.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Guru Pendidikan Anak Usia Dini (PGPAUD)",
//     ukt: {
//       I: "600.000", II: "1.200.000", III: "2.400.000", IV: "3.600.000",
//       V: "4.800.000", VI: "6.000.000", VII: "7.200.000",
//     },
//   },
//   {
//     programStudi: "Program Pendidikan Profesi Guru (PPG)",
//     ukt: {
//       I: "2.000.000", II: "3.000.000", III: "4.000.000", IV: "5.000.000",
//       V: "6.000.000", VI: "7.000.000", VII: "8.000.000",
//     },
//   },
//   {
//     programStudi: "Pendidikan Agama Islam (PAI)",
//     ukt: {
//       I: "500.000", II: "1.000.000", III: "2.000.000", IV: "3.000.000",
//       V: "4.000.000", VI: "5.000.000", VII: "6.000.000",
//     },
//   },
// ];

const ProgramStudi = () => {
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
          <h3 className="text-primary fw-bold mb-2">Biaya Pendidikan</h3>
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

          <BiayaPendidikan/>
          {/* <div className="overflow-scroll" >
           <div className="" style={{width:"max-content"}}>
              <table className="table table-bordered text-center" >
                <thead> 
                  <tr>
                    <th rowSpan={2}>No</th>
                    <th rowSpan={2}>Program Studi</th>
                    <th colSpan={7}>Uang Kuliah Tunggal (Rp/semester)</th>
                  </tr>
                  <tr>
                    {["I", "II", "III", "IV", "V", "VI", "VII"].map((smt) => (
                      <th key={smt}>{smt}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {uktList.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="text-start">{item.programStudi}</td>
                      {["I", "II", "III", "IV", "V", "VI", "VII"].map((smt) => (
                        <td key={smt}>{item.ukt[smt]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProgramStudi;
