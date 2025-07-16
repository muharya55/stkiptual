"use client"
import FakultasCard from 'app/components/fakultasCard';
import { useFakultas } from 'lib/useFakultas';
import React, { Key } from 'react'
type Jurusan = {
  nama: string;
};

const ProdiSection = () => {
    const{data : fakultasData , isLoading, isError} = useFakultas();

    if (isLoading) return <p className="text-center">Loading Prodi ...</p>;
    if (isError) return <p className="text-center text-danger">Gagal memuat Prodi .</p>;
    // console.log(fakultasData);
    
  return (
    <>
        <div className="row">
            {fakultasData.map(
              (
                fakultas: {
                  singkatan: string;
                  nama: string;
                  program: string;
                  jurusan: Jurusan[];
                },
                index: Key
              ) => (
                <FakultasCard
                  key={index}
                  singkatan={fakultas.singkatan}
                  nama={fakultas.nama}
                  program={fakultas.program}
                  jurusan={fakultas.jurusan}
                />
              )
            )}
          </div>
    </>
  )
}

export default ProdiSection
