"use client"

import { useBiro } from 'lib/useBiro';
import Image from 'next/image'
import React from 'react'

 
type Props = {
  slug: string;
};
const BiroSection = ({slug}:Props) => {
    const { data :biro, isLoading, isError } = useBiro(slug);

  if (isLoading) return <p>Memuat data...</p>;
  if (isError) return <p>Gagal memuat data struktur.</p>;
  if (!biro) return <p>Data tidak ditemukan.</p>;
  // console.log(biro);
  
  return (
    <>
      <div className="container">
                    <div className="row d-flex justify-content-evenly bg-alice" >

                        <div className="col-md-5 mt-4" >
                         <strong > <h4 className="mt-2">Kepala Biro</h4></strong>
                         <div className="mt-3"></div>
                         <div className="">
                          <p>{biro.nama_pimpinan}</p>
                          <p>{biro.email_pimpinan}</p> 
                         </div>
                        </div>
                        <div className="col-md-3 mt-4">
                        <Image  width={1500}
                                    height={800} alt="Biro" style={{width:"11rem"}} className="mt-2 mb-5" src={'/'+biro.gambar_pimpinan|| "/images/nana-sujana.png"}  /></div>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: biro.content }} />

                    </div>
    </>
  )
}

export default BiroSection
