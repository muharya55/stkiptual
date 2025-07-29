 
// app/data/sidebarMenu.ts

import UkmDetailSec from "app/section/UkmDetailSec";
import Image from "next/image";
 
export type MenuItem = {
  label: string;
  href: string;
};
 const ukmList = [
  ['BADMINTON', 'KARATE', 'MADAPALA', 'MUSIK', 'PSM', 'SEPAKBOLA'],
  ['BOLA BASKET', 'KOPMA', 'DECO', 'PMI', 'POROS', 'TAE KWON DO'],
  ['BOLA VOLI', 'LENSA', 'MENWA', 'PRAMUKA', 'SENI TARI'],
];
const UkmDetail: React.FC = () => {

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

    <UkmDetailSec/>
    </>
  );
};

export default UkmDetail;
