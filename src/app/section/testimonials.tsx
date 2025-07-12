'use client'

import Image from "next/image"
import { JSX, useEffect } from "react";
  
const Testimonials = () => {
    
  return (
    < >
    <AutoClickSwiperBullets/>
     <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonials-info text-center">
                    <Image
                      width={200}
                      height={100}
                      src="/images/testimonial/testimonial-01.png"
                      alt=""
                      className="mb-20px"
                    />
                    <h6 className="fw-semibold fs-16 mb-5px">Susan Jackson</h6>
                    <p className="mb-5px">WordPress Developer</p>
                    <p className="line-clamp-3">
                      Pierre is a Fullbright Scholar working to drive change within
                      indigenous communities.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonials-info text-center">
                    <Image
                      width={200}
                      height={100}
                      src="/images/testimonial/testimonial-02.png"
                      alt="aaaa"
                      className="mb-20px"
                    />
                    <h6 className="fw-semibold fs-16 mb-5px">Pierre Hackett</h6>
                    <p className="mb-5px">Bachelor of Business / MBA</p>
                    <p className="line-clamp-3">
                      Leah is the founder, leader and manager of the most
                      successful private practice dietetic company across American.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonials-info text-center">
                    <Image
     width={200}
                  height={100}
                      src="/images/testimonial/testimonial-03.png"
                      alt=""
                      className="mb-20px"
                    />
                    <h6 className="fw-semibold fs-16 mb-5px">Victor Hansen</h6>
                    <p className="mb-5px">Bachelor of Information Technology</p>
                    <p className="line-clamp-3">
                      Tyson is a serial entrepreneur taking his passion projects
                      and turning them into successful businesses.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonials-info text-center">
                    <Image
     width={200}
                  height={100}
                      src="/images/testimonial/testimonial-04.png"
                      alt=""
                      className="mb-20px"
                    />
                    <h6 className="fw-semibold fs-16 mb-5px">Leah Steven</h6>
                    <p className="mb-5px">Master of Nutrition and Dietetics</p>
                    <p className="line-clamp-3">
                      Leah is the founder, leader and manager of the most
                      successful private practice dietetic company across American.
                    </p>
                  </div>
                </div>
              </div>
    </>
  )
}

const AutoClickSwiperBullets = (): JSX.Element | null => {
  useEffect(() => {
    const bullets = document.querySelectorAll('.swiper-pagination-bullet') as NodeListOf<HTMLElement>;
    
    if (bullets.length === 0) return;

    let index = 0;
    const interval = setInterval(() => {
      bullets[index].click();
      index = (index + 1) % bullets.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return null;
};
export default Testimonials
