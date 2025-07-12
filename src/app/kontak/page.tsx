 
// app/data/sidebarMenu.ts

export type MenuItem = {
  label: string;
  href: string;
};
 
const Kontak = () => {
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
              Kontak
            </h1>
          </div>
          
        </div>
      </div>
    </section>
    <section className="faqs-part-three  ">
      <div className="container">
        <div className="contact-box my-5">
          <div className="contact-box_inner d-flex">
            <div className="contact-box_left">
              <h5 className="fw-semibold mb-10px">Take The First Step</h5>
              <p className="mb-30px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="contact-box_left_wrapper d-flex gap-10px mb-20px">
                <h2 className="contact-box_left_number fw-bolder">01</h2>
                <div className="contact-box_left_content">
                  <h6 className="fw-semibold mb-5px">Forward Thinking</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod
                  </p>
                </div>
              </div>
              <div className="contact-box_left_wrapper d-flex gap-10px mb-20px">
                <h2 className="contact-box_left_number fw-bolder">02</h2>
                <div className="contact-box_left_content">
                  <h6 className="fw-semibold mb-5px">Actionable Content</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod
                  </p>
                </div>
              </div>
              <div className="contact-box_left_wrapper d-flex gap-10px mb-20px">
                <h2 className="contact-box_left_number fw-bolder">03</h2>
                <div className="contact-box_left_content">
                  <h6 className="fw-semibold mb-5px">Forward Thinking</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-box_right">
              <h5 className="fw-semibold text-white mb-20px">
                Didnt Find The Answer?
              </h5>
              <form className="contact-box_right_form" id="contactForm">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nama "
                />
                <input
                  type="text"
                  id="nim"
                  name="nim"
                  placeholder="Nim "
                />
                <input
                  type="text"
                  id="jurusan"
                  placeholder="Jurusan"
                  name="jurusan"
                />
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={5}
                  placeholder="Pesan "
                   
                />
                <button
                  type="submit"
                  className="button text-white button-type-02 fw-medium text-uppercase transition-all"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  );
};

export default Kontak;
