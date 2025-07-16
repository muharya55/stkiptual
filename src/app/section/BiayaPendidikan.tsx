"use client"
import { useProdi } from 'lib/useProdi';
import React from 'react'

type UktData = {
  nama: string;
  ukt: {
    [semester: string]: string;
  };
};

function formatRupiah(value: number | string | null | undefined): string {
  const num = typeof value === "number" ? value : parseFloat(value ?? "0");
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(num)
    .replace(",00", "");
}

const BiayaPendidikan = () => {
   const { data: jurusanList, isLoading, isError } = useProdi();

    if (isLoading) return <p className="text-center">Loading Prodi ...</p>;
    if (isError) return <p className="text-center text-danger">Gagal memuat Prodi.</p>;
    console.log(jurusanList);

    const uktList: UktData[] = jurusanList.map((item: { nama: string; ukt1: string | number | null | undefined; ukt2: string | number | null | undefined; ukt3: string | number | null | undefined; ukt4: string | number | null | undefined; ukt5: string | number | null | undefined; ukt6: string | number | null | undefined; ukt7: string | number | null | undefined; }) => ({
        nama: item.nama ?? "-",
        ukt: {
            I: formatRupiah(item.ukt1),
            II: formatRupiah(item.ukt2),
            III: formatRupiah(item.ukt3),
            IV: formatRupiah(item.ukt4),
            V: formatRupiah(item.ukt5),
            VI: formatRupiah(item.ukt6),
            VII: formatRupiah(item.ukt7),
        },
    }));
    
  return (
  
     <div className="overflow-scroll" >
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
                      <td className="text-start">{item.nama}</td>
                      {["I", "II", "III", "IV", "V", "VI", "VII"].map((smt) => (
                        <td key={smt}>{item.ukt[smt]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> 
  )
}

export default BiayaPendidikan
