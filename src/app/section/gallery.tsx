'use client'; // jika digunakan di app router dan ada interaksi client-side

import React from 'react';
import CampusCard from 'app/components/campusCard';

interface GalleryItem {
  image: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { image: 'galeri-1.JPG', category: 'category-one' },
  { image: 'galeri-2.JPG', category: 'category-two' },
  { image: 'galeri-3.JPG', category: 'category-two' },
  { image: 'galeri-4.JPG', category: 'category-two' },
  { image: 'galeri-5.webp', category: 'category-two' },
  { image: 'galeri-6.webp', category: 'category-two' },
];

const GallerySection: React.FC = () => {
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
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`col-12 col-md-6 col-lg-4 grid-gallery_item pb-30px ${item.category}`}
              >
                 <CampusCard
                  src={`/images/gallery/${item.image}`}
                  alt={`Gallery ${index + 1}`}
                  label="Kampus Dharmawangsa - B"
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
