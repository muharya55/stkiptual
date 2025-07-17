"use client"

import { useUtilities } from "lib/useUtilities";

const VisiMisiSection = () => {
     const { data :sejarah, isLoading, isError } = useUtilities('visi-misi');
        
          if (isLoading) return <p>Memuat data...</p>;
          if (isError) return <p>Gagal memuat data struktur.</p>;
          if (!sejarah) return <p>Data tidak ditemukan.</p>;
  return (
    <>
      <div className="events-details__wrapper d-flex flex-wrap">
        <div dangerouslySetInnerHTML={{ __html: sejarah.data }} />

      </div>
    </>
  )
}

export default VisiMisiSection
