  
// app/data/sidebarMenu.ts

import DownloadList from "app/section/DownloadList";
 
const Unduhan: React.FC = () => {

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
              Download
            </h1>
          </div>
          
        </div>
      </div>
    </section>

     <DownloadList/>

    </>
  );
};

export default Unduhan;
