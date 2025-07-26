"use client"

import Link from 'next/link'
import React from 'react'
import useSWR from 'swr';

const Banner = () => {
  const { data , isLoading } = useSWR('/api/utilities', null)  ;
 
  if (!data || isLoading  ) return <p>Memuat data...</p>; 
  const selectedIds = ['image-banner','text-banner3','text-banner2','text-banner1']
 
  const hasil = data.filter((ut :{slug:string}) => selectedIds.includes(ut.slug))
  
  const imagebanner = hasil.find((item: {slug:string}) => item.slug==='image-banner')
  const textbanner3 = hasil.find((item: {slug:string}) => item.slug==='text-banner3')
  const textbanner2 = hasil.find((item: {slug:string}) => item.slug==='text-banner2')
  const textbanner1 = hasil.find((item: {slug:string}) => item.slug==='text-banner1')

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const backgroundImage= `url("${apiUrl}/storage/${imagebanner.image}")` ||'url("../images/university/banner-slide-01.jpg")';
//   console.log(hasil);
//   console.log(backgroundImage);
                            // src={`${apiUrl}/storage/${item.image}` || '/images/berita-1.jpeg'}

  return (
    <>
       <div
            className="swiper-slide uni-banner__slide vh-100 d-flex align-items-center position-relative"
            style={{
            // backgroundImage: 'url("../images/university/banner-slide-01.jpg")'
            backgroundImage
            }}
        >
            <div className="container">
            <div className="uni-banner__content text-white position-relative">
                <p
                className="text-uppercase fw-medium fs-20 mb-20px wow flipInX"
                data-wow-duration="1.5s"
                >
                 {textbanner1.deskripsi || 'Selamat Datang di'} 
                </p>
                <h1
                className="fs-70 fw-bolder text-uppercase text-white wow flipInX"
                data-wow-duration="1.5s"
                >
                {textbanner2.deskripsi||'WEBSITE STKIP TUAL'}
                </h1>
                <h3 className="fs-30 fw-bolder text-uppercase text-white mb-40px wow flipInX"> {textbanner3.deskripsi||'Gerbang Menuju Pengabdian'}</h3>
                <Link href="#" className="uni-button transition-all">
                
                Daftar Sekarang
                </Link>
            </div>
            </div>
        </div>
        {/* <div
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
        </div> */}
    </>
  )
}

export default Banner
