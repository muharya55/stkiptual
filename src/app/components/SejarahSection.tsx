"use client"
import { useUtilities } from 'lib/useUtilities';
import React from 'react'

const SejarahSection = () => {
     const { data :sejarah, isLoading, isError } = useUtilities('sejarah');
    
      if (isLoading) return <p>Memuat data...</p>;
      if (isError) return <p>Gagal memuat data struktur.</p>;
      if (!sejarah) return <p>Data tidak ditemukan.</p>;
      // console.log(sejarah);
      
  return (
    <>
      <div className="events-details__wrapper d-flex flex-wrap">
        <div dangerouslySetInnerHTML={{ __html: sejarah.data }} />

      </div>
    </>
  )
}

export default SejarahSection
