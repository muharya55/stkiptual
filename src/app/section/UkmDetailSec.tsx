"use client"

import { useListUkm } from "lib/useListUkm";
import Image from "next/image"
import useSWR from "swr";
type UKMItem = {
  nama_ukm: string;
};
const UkmDetailSec = () => {
    const { data , isLoading } = useSWR('/api/utilities', null)  ;
    const { data: dataukm , isLoading :loadingukm } = useListUkm();
    if (!data || isLoading ||!dataukm  || loadingukm ) return <p>Memuat data...</p>; 
 
    console.log(dataukm);
    
    const ukmimage = data.find((item: {slug:string}) => item.slug==='ukm-image')
    const ukmtext = data.find((item: {slug:string}) => item.slug==='ukm-content')
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const columns = [0, 1, 2];

  return (
    <>
        <div className="container">
            <div className="row gy-30px">
              <div className="col-12 col-lg-6"> 
      
                <div className="mt-5">
                    <Image  width={1500}
                          height={800} alt="Struktur" style={{width:"100%",height:"150%"}} className="mt-2 mb-5" src={`${apiUrl}/storage/${ukmimage?.image}`} />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="major-page_view">
                   
                  {/* <h4 className="fw-semibold mt-30px mb-30px">Biro Kemahasiswaan</h4> */}
                  <h3 className="text-primary fw-bold mb-2 mt-5">Unit Kegiatan Mahasiswa</h3>
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
                  <div className="mb-10px">
                        <div dangerouslySetInnerHTML={{ __html: ukmtext?.data }} />
                    </div>
                </div>
              </div>
              
            </div>
              <div className="mt-5"></div>
              <hr />
              <div className="mt-5"></div>
             
           
      
            
          </div>
      
          <section className="py-5 text-white" style={{ backgroundColor: '#003366', backgroundImage: 'url(/background.png)', backgroundSize: 'cover' }}>
            <div className="container text-center">
            <div className="ukm-title-wrapper text-center position-relative mb-5">
              <h2 className="ukm-title fw-bold text-white text-uppercase m-0">Unit Kegiatan Mahasiswa</h2>
            </div>
      
              <div className="row mt-4 justify-content-center">
                {columns.map((col: number) => (
                  <div className="col-md-4 mb-3" key={col}>
                    {dataukm
                      .filter((_: UKMItem, index: number) => index % 3 === col)
                      .map((item: UKMItem, idx: number) => (
                        <div
                          key={idx}
                          className="border border-light py-2 my-2 text-white fw-bold"
                          style={{ cursor: 'pointer' }}
                        >
                          {item.nama_ukm}
                        </div>
                      ))}
                  </div>
                ))}
              </div>

            </div>
          </section>
      
    </>
  )
}

export default UkmDetailSec
