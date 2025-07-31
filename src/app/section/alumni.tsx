'use client';

import Image from "next/image";
import "../styles/marquee.css"; // pastikan kamu sudah punya file ini
import { useAlumni } from "lib/useAlumni";
import React from "react";
 
interface ReadMoreProps {
  text: string;
  maxLength?: number;
}
const AlumniSection = () => {
  
  const { data: alumni, isLoading, isError } = useAlumni();
  const repeated = [...alumni, ...alumni];
  
  if (isLoading) return <p className="text-center">Loading alumni...</p>;
  if (isError) return <p className="text-center text-danger">Gagal memuat alumni.</p>;

   
  // const repeated = [...alumniData, ...alumniData];

  return (
    <section className="uni-testimonials pt-80px pb-120px">
      <div className="container">
        <h4 className="fw-medium text-center mb-5px">Alumni Kami</h4>
        <p className="text-center mb-40px">
          Your experience does not stop when you graduate.
        </p>
        <div className="marquee-container">
          <div className="marquee-track">
            {repeated.map((item, index) => (
              <div className="marquee-slide" key={index}>
                <div className="testimonials-info text-center">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.gambar}` || '/images/berita-1.jpeg'}
                    unoptimized
                    alt={item.nama}
                    width={200}
                    height={100}
                    className="mb-20px"
                  />
                  <h6 className="fw-semibold fs-16 mb-5px">{item.nama}</h6>
                  <p className="mb-5px">{item.jabatan}</p>
                  <ReadMore text={item.motivasi} maxLength={100} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const toggle = () => setIsExpanded(prev => !prev);

  if (!text) return null;

  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded || !shouldTruncate
    ? text
    : text.slice(0, maxLength) + '...';

  return (
    <p className="mb-5px">
      {displayText}
      {shouldTruncate && (
        <button
          onClick={toggle}
          className="btn btn-link p-0 ps-1 align-baseline"
          style={{ fontSize: '0.9rem' }}
        >
          {isExpanded ? 'Sembunyikan' : 'Lihat Selengkapnya'}
        </button>
      )}
    </p>
  );
};

export default AlumniSection;
