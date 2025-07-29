 
// app/data/sidebarMenu.ts

import OrmawaDetailSec from "app/section/OrmawaDetailSec";
// import Image from "next/image";

 
// const organisasiList: string[] = [
//   'DPM F. Agama Islam',
//   'BEM F. Agama Islam',
//   'HM Bahasa dan Sastra Arab',
//   'HM Ilmu Hadis',
//   'HM Pend. Agama Islam',
//   'HM Perbankan Syariah',
// ];

const OrmawaDetail: React.FC = () => {

  return (
    <>
    
    <section
      className="faqs-part-two pt-120px pb-130px"
      style={{ backgroundImage: "url(../images/gallery/ilustrasi-section-1.jpg)" }}
    >
      <div className="container">
        <div className="row flex-wrap align-items-center">
          <div className="col-md-12 mb-30px mb-md-0">
            <h1 className=" text-center fw-semibold text-white">
              Kemahasiswaan
            </h1>
          </div>
          
        </div>
      </div>
    </section>

   <OrmawaDetailSec/>

    </>
  );
};

export default OrmawaDetail;
