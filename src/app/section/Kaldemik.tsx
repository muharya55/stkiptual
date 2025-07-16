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
          {uktList.map((item :JadwalAkademik, index :number) => (
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
          {uktList.map((item :JadwalAkademik, index :number) => (
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
