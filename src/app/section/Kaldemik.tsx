"use client"
import { useKalenderAkademik } from "lib/useKalenderAkademik";


interface JadwalAkademik {
  no: number;
  kegiatan: string;
  tanggal: string;
}

 

const Kaldemik = () => {
    const { data :uktList, isLoading, isError } = useKalenderAkademik();

    if (isLoading) return <p>Memuat data...</p>;
    if (isError) return <p>Gagal memuat data struktur.</p>;
    if (!uktList) return <p>Data tidak ditemukan.</p>;
    console.log(uktList);
    const ganjil = uktList.filter((uk: { semester: string; }) => uk.semester =='Ganjil');
    const genap = uktList.filter((uk: { semester: string; }) => uk.semester =='Genap');

  return (
    <>
    <table className="table table-bordered table-stripped text-center" >

      <thead style={{backgroundColor:"#E6F0D9"}}>
          <tr style={{backgroundColor:"#E6F0D9"}}>
            <th>No</th>
            <th>Kegiatan Semester Ganjil</th>
            <th>Tanggal</th>
          </tr> 
        </thead>
        <tbody>
          {ganjil.map((item :JadwalAkademik, index :number) => (
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
          {genap.map((item :JadwalAkademik, index :number) => (
              <tr key={index}>
              <td>{index + 1}</td>
              <td className="text-start">{item.kegiatan}</td>
              <td className="text-start">{item.tanggal}</td>
              </tr>
          ))}
          </tbody>
    </table>
    </>
  )
}

export default Kaldemik
