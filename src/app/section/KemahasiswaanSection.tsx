'use client'

import Image from 'next/image'
import Link from "next/link";
import useSWR from 'swr';

const KemahasiswaanSection = () => {
    const { data , isLoading } = useSWR('/api/utilities', null)  ;
 
  if (!data || isLoading  ) return <p>Memuat data...</p>;  
  const komunitastext = data.find((item: {slug:string}) => item.slug==='komunitas-text')
  const ormawatext = data.find((item: {slug:string}) => item.slug==='ormawa-text')
  const ukmtext = data.find((item: {slug:string}) => item.slug==='ukm-content')

  const komunitasimage = data.find((item: {slug:string}) => item.slug==='komunitas-image')
  const ormawaimage = data.find((item: {slug:string}) => item.slug==='ormawa-image')
  const ukmimage = data.find((item: {slug:string}) => item.slug==='ukm-image')
 
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  console.log(ukmtext);
//   console.log(ormawatext);
  
  return (
    <>
      <div className="container">
      <div className="row gy-30px">
        <div className="col-12 col-lg-6"> 

          <div className="mt-5">
            <Image  width={1500}
            height={800} alt="Struktur"  style={{width:"100%"}} className="mt-2 mb-5" src={`${apiUrl}/storage/${komunitasimage?.image}`}  />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="major-page_view">
             
            {/* <h4 className="fw-semibold mt-30px mb-30px">Biro Kemahasiswaan</h4> */}
            <h3 className="text-primary fw-bold mb-2 mt-5">Komunitas</h3>
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
                <div dangerouslySetInnerHTML={{ __html: komunitastext?.data }} />
            </div>
            {/* <p className="mb-10px">
              STKIP Evav TUAL  memiliki berbagai komunitas yang dibentuk oleh mahasiswa untuk mengasah bakat dan minat.  Komunitas itu ada yang terbentuk oleh latar belakang keilmuan masing-masing mahasiswa mau pun yang terbentuk karena kegemaran akan minat tertentu oleh setiap mahasiswa tanpa melihat latar belakang keilmuan. Adapun komunitas mahasiswa yang terbentuk berdasarkan latar belakang keilmuan dan komunitas mahasiswa yang terbentuk atas dasar kegemaran tanpa melihat latar belakang keilmuan tertentu.
            </p> */}
             
             
            
              
          </div>
        </div>
        
      </div>
        <div className="mt-5"></div>
        <hr />
        <div className="mt-5"></div>
      <div className="row">
                <div className="col-12 col-lg-6">
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
                     <Link href="/ukm-detail" className="uni-button transition-all text-white">
                    
                    Selengkapnya
                  </Link>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="mt-5">
                    <Image  width={1500}
                    height={800} alt="Struktur" style={{width:"100%",height:"150%"}} className="mt-2 mb-5" src={`${apiUrl}/storage/${ukmimage?.image}`}  />
                  </div>
                </div>
      </div>
      <div className="row">
                <div className="col-12 col-lg-6">
                   <h3 className="text-primary fw-bold mb-2 mt-5">Organisasi Mahasiswa</h3>
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
                     <Link href="/ormawa-detail" className="uni-button transition-all text-white">
                    
                    Selengkapnya
                  </Link>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="mt-5">
                    <Image  width={1500}
                    height={800} alt="Struktur" style={{width:"100%"}} className="mt-2 mb-5" src={`${apiUrl}/storage/${ormawaimage?.image}`}  />
                  </div>
                </div>
      </div>

      
    </div>
    </>
  )
}

export default KemahasiswaanSection
