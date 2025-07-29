"use client"

import { useListOrmawa } from "lib/useListOrmawa";
import Image from "next/image"
import useSWR from "swr";
type OrmawaItem = {
  nama_ormawa: string;
};

const OrmawaDetailSec = () => {
    const { data , isLoading } = useSWR('/api/utilities', null)  ;
    const { data: dataormawa , isLoading :loadingormawa } = useListOrmawa();
    if (!data || isLoading ||!dataormawa  || loadingormawa ) return <p>Memuat data...</p>; 
 
    console.log(dataormawa);
    
    const ormawaimage = data.find((item: {slug:string}) => item.slug==='ormawa-image')
    const ormawatext = data.find((item: {slug:string}) => item.slug==='ormawa-text')
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
 
  return (
    <>
           <div className="container">
      <div className="row gy-30px">
        <div className="col-12 col-lg-6"> 

          <div className="mt-5">
                <Image  width={1500}
                                 height={800} alt="Struktur" style={{width:"100%"}} className="mt-2 mb-5" src={`${apiUrl}/storage/${ormawaimage?.image}`}  />
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
              <div dangerouslySetInnerHTML={{ __html: ormawatext?.data }} />
            </div>
             
             
            
              
          </div>
        </div>
        
      </div>
        <div className="mt-5"></div>
        <hr />
        <div className="mt-5"></div>
       
     

      
    </div>
  <section className="py-5">
      <div className="container">
        <div className="position-relative mb-4">
          <h2 className="text-uppercase fw-bold text-primary">
            Organisasi Mahasiswa
          </h2>
          <div
            className="bg-warning position-absolute"
            style={{ height: '4px', width: '100%', bottom: 0 }}
          />
        </div>

         <div className="row g-3">
          {dataormawa.map((item: OrmawaItem, index: number) => (
            <div className="col-md-6" key={index}>
              <div className="bg-warning text-white text-center fw-semibold p-2 rounded">
                {item?.nama_ormawa ??''}
              </div>
            </div>
          ))}

          {/* {dataormawa.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="bg-warning text-white text-center fw-semibold p-2 rounded">
                {item}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
      
    </>
  )
}

export default OrmawaDetailSec
