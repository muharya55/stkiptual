import Sidebar from 'app/components/sidebar'
import VisiMisiSection from 'app/components/VisiMisiSection'
import { MenuItems1 } from 'app/data/menu'
 
const StrukturOrganisasi = () => {
  return (
    <>
      <section className="events-details mt-40px mb-80px">
           <div className="container">
             <div className="row">
               <div className="col-xl-3 col-lg-4">
                <div className="sidebar sidebar-left">
                  <div className="widget">
                  
                    <Sidebar data={MenuItems1} />
                     
                  </div>
                </div>
         </div>
   
   
         <div className="col-12  col-lg-9 mb-30px mb-lg-0">
              {/* <h1 className="fs-30 fw-semibold mb-40px">
    Visi, Misi, Tujuan, dan Strategi STKIP Persada Evav Tual
  </h1> */}

  {/* Visi */}
  <h3 className="text-primary fw-bold mb-2">Visi , Misi dan Sasaran STKIP Persada Evav Tual</h3>
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
   <VisiMisiSection/>

  <div className="events-details__wrapper d-flex flex-wrap"></div>
         </div>
          
       </div>
     </div>
   </section>
    </>

  )
}

export default StrukturOrganisasi
