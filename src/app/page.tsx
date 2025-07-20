import Link from "next/link";
import AlumniSection from "./section/alumni";
import BeritaSection from "./section/berita";
import GallerySection from "./section/gallery";
import VideoSection from "./section/video";

 
export default function Home() {
  
  return (
    < >
    <div className="">


      <section className="uni-banner position-relative">
        <div
          className="swiper edm-swiper"
          data-slides-per-view={1}
          data-button-next="edm-swiper-button-next-sluni"
          data-button-prev="edm-swiper-button-prev-sluni"
          data-loop="true"
        >
          <div className="swiper-wrapper">
            <div
              className="swiper-slide uni-banner__slide vh-100 d-flex align-items-center position-relative"
              style={{
                backgroundImage: 'url("../images/university/banner-slide-01.jpg")'
              }}
            >
              <div className="container">
                <div className="uni-banner__content text-white position-relative">
                  <p
                    className="text-uppercase fw-medium fs-20 mb-20px wow flipInX"
                    data-wow-duration="1.5s"
                  >
                    Selamat Datang di 
                  </p>
                  <h1
                    className="fs-70 fw-bolder text-uppercase text-white wow flipInX"
                    data-wow-duration="1.5s"
                  >
                  WEBSITE STKIP TUAL
                  </h1>
                  <h3 className="fs-30 fw-bolder text-uppercase text-white mb-40px wow flipInX">Gerbang Menuju Pengabdian</h3>
                  <Link href="#" className="uni-button transition-all">
                    
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide uni-banner__slide vh-100 d-flex align-items-center position-relative"
              style={{
                backgroundImage: 'url("../images/university/banner-slide-02.jpg")'
              }}
            >
              <div className="container">
                <div className="uni-banner__content text-white position-relative">
                  <p
                    className="text-uppercase fw-medium fs-20 mb-20px wow flipInX"
                    data-wow-duration="1.5s"
                  >
                    The best theme for
                  </p>
                  <h1
                    className="fs-70 fw-bolder text-uppercase text-white mb-30px wow flipInX"
                    data-wow-duration="1.5s"
                  >
                    Learnpress
                  </h1>
                  <a href="#" className="uni-button transition-all">
                    Buy Universitas SanjayaNow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next swiper-nextBtn-style-02 edm-swiper-button-next-sluni transition-all" />
        <div className="swiper-button-prev swiper-preBtn-style-02 edm-swiper-button-prev-sluni transition-all" />
        <div className="theme-scroll uni-banner__scroll">
          <a href="#section-welcome" className="cursor-pointer">
            <i
              className="iconify fs-18 text-white animation-blink"
              data-icon="grommet-icons:down"
            />
          </a>
        </div>
      </section>
      <BeritaSection/>
      {/* <SearchBerita/> */}
      
      <AlumniSection/>
      <GallerySection/>
      <VideoSection/>
      
    </div>
    </>
  );
}
