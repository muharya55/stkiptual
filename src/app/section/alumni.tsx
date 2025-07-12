'use client';

import Image from "next/image";
import "../styles/marquee.css"; // pastikan kamu sudah punya file ini
import { useAlumni } from "lib/useAlumni";

const alumniData = [
  {
    name: "Satria Sinurat",
    title: "Pegawai Kementerian ATR/BPN - Kementerian ATR/BPN Kantor Pertanahan",
    image: "/images/testimonial/testimonial-01.png",
    text: "STKIP EVAV TUAL merupakan tempat dimana saya dipertemukan dengan teman-teman yang datang dari berbagai daerah, Saya mengikuti berbagai sub- organiasi dan juga ikut ke dalam Tim Public Speaking, disana saya berbaur dan saling menjalin relasi.",
  },
  {
    name: "Tarisya Ativya Lubis",
    title: "Vice President Consumer Business Area 3 Telkomsel",
    image: "/images/testimonial/testimonial-03.png",
    text: "Awalnya saya ragu mengambil Prodi Manajemen Informatika di STKIP EVAV TUAL karena terbayang akan mata kuliahnya. Namun ternyata belajar di Prodi Manajemen Informatika di STKIP EVAV TUAL sangatlah menyenangkan karena tenaga pengajar dosen dan karyawan yang sangat ramah dan humble serta fasilitas lengkap membuat saya mudah belajar dan beradaptasi.",
  },
  {
    name: "Rizka Dwi Savira",
    title: "PNS - Kejaksaan RI Humbang Hasundutan",
    image: "/images/testimonial/testimonial-02.png",
    text: "Saya memilih jurusan Teknik Informatika, karena saya tahu dan tidak bisa dipungkiri, kalau jurusan Teknik Informatika sangat dibutuhkan disemua instansi. Kampus yang sudah berdiri sejak tahun 1999 dengan fasilitas yang lengkap membuat saya dapat belajar dengan baik.",
  },
  {
    name: "Beri Suranta Sembiring",
    title: "PNS - Kejaksaan RI Humbang Hasundutan",
    image: "/images/testimonial/testimonial-04.png",
    text: "Untuk adik-adik yang masih duduk dibangku perkuliahan, harus menekuni mata kuliah yang diajarkan di Kampus, karena semua yang diajarkan sangat berguna di dunia kerja era digital 4.0. Dan bagi adik-adik yang mau kuliah, tetapkan pilihanmu. Tetap semangat dan jangan menyerah..",
  },
];

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
                    src={item.gambar}
                    alt={item.nama}
                    width={200}
                    height={100}
                    className="mb-20px"
                  />
                  <h6 className="fw-semibold fs-16 mb-5px">{item.nama}</h6>
                  <p className="mb-5px">{item.jabatan}</p>
                  <p className="line-clamp-3">{item.motivasi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
