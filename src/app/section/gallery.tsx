'use client'; // jika digunakan di app router dan ada interaksi client-side

import React from 'react';
import CampusCard from 'app/components/campusCard';
import { useGaleri } from 'lib/useGaleri';

 
// const galleryItems: GalleryItem[] = [
//   { image: 'galeri-1.JPG', category: 'category-one' },
//   { image: 'galeri-2.JPG', category: 'category-two' },
//   { image: 'galeri-3.JPG', category: 'category-two' },
//   { image: 'galeri-4.JPG', category: 'category-two' },
//   { image: 'galeri-5.webp', category: 'category-two' },
//   { image: 'galeri-6.webp', category: 'category-two' },
// ];

const GallerySection: React.FC = () => {
  const{data : galleryItems , isLoading,isError} = useGaleri();
  
    if (isLoading) return <p className="text-center">Loading Struktur Organisasi...</p>;
    if (isError) return <p className="text-center text-danger">Gagal memuat Struktur Organisasi.</p>;
console.log(galleryItems);

  return (
    <>
      <div className="container my-5">
        <div className="position-relative">
          {/* Garis kuning di atas */}
          <div className="bg-warning" style={{ height: '16px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}></div>

          {/* Box biru dengan teks */}
          <h3 className="bg-primary text-white text-center py-4 fw-bold rounded-bottom-end" style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: '20px' }}>
            Galeri Kampus
          </h3>
        </div>
      </div>


      <section className="gallery-page mt-40px mb-80px">
        <div className="container">
          <div className="row gy-30px grid-gallery">
            {galleryItems.map((item: { deskripsi: string; gambar: string; }, index: React.Key | null | undefined) => (
              <div
                key={index}
                className={`col-12 col-md-6 col-lg-4 grid-gallery_item pb-30px ${item.deskripsi}`}
              >
                <CampusCard
                  // src={`${item.gambar}`}
                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.gambar}` || '/images/berita-1.jpeg'}

                  alt={`Gallery ${index ??0 + 1}`}
                  label={item.deskripsi ||''}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
