'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerSections = [
  {
    title: 'Direktorat',
    items: [
      "Pendidikan", "Kemahasiswaan", "Manajemen Resiko", "Arsip"
    ],
  },
  {
    title: 'Unit',
    items: [
      "Lembaga", "LPM", "LPPM",  "Perpustakaan", "Pusat Bahasa", 
     
    ],
  },
  {
    title: 'Resources',
    items: [
      "Direktori eJournal",  "Portal Akademik", "Portal e-Office",
      "Repository", "Direktori Dosen"
    ],
  }
];

export default function Footer() {
  return (
    <footer className="section-footer uni-footer footer-layout-1 pt-80px">
      <div className="container">
        <div className="row">
          {/* Kolom Logo dan Kontak */}
          <div className="col-12 col-lg-4 mb-30px mb-lg-0">
            <Link href="/">
              <Image
                src="/images/logo/bg-univ-2.PNG"
                alt="logo"
                width={200}
                height={100}
                className="section-footer_logo mb-40px"
                unoptimized
              />
            </Link>
            <div className="footer-layout-1__info d-flex align-items-center gap-5px mb-10px">
              <i className="iconify fs-20" data-icon="iconoir:phone" />
              <span>+62 087721122</span>
            </div>
            <div className="footer-layout-1__info d-flex align-items-center gap-5px mb-10px">
              <i className="iconify fs-20" data-icon="akar-icons:location" />
              <span>JL. Pattimura No.12</span>
            </div>
            <div className="footer-layout-1__info d-flex align-items-center gap-5px mb-20px">
              <i className="iconify fs-20" data-icon="tabler:mail-check" />
              <span>
                <Link href="mailto:info@universitascontoh.ac.id">
                  info@universitascontoh.ac.id
                </Link>
              </span>
            </div>
            <ul className="d-flex align-items-center gap-15px">
              {["facebook", "twitter-x-fill", "pinterest-logo", "instagram-logo"].map((icon, i) => (
                <li key={i}>
                  <Link href="#"><i className="iconify fs-24" data-icon={`ph:${icon}`} /></Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Dinamis dari Map */}
          {footerSections.map((section, i) => (
            <div key={i} className="col-6 col-lg-2 mb-20px mb-lg-0">
              <h6 className="footer__title fw-semibold text-white mb-40px">{section.title}</h6>
              <ul>
                {section.items.map((item, j) => (
                  <li key={j} className="mb-10px">
                    <Link href="#" className="transition-all">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="footer-layout-1__bottom d-flex flex-wrap align-items-center justify-content-between mt-50px pt-30px pb-30px">
            <p className="transition-all mb-20px mb-md-0">
              © 2025 STKIP EVAV TUAL. All rights reserved.
            </p>
            <ul className="d-flex align-items-center gap-30px">
              {["Privacy", "Terms", "Sitemap", "Purchase"].map((item, i) => (
                <li key={i}>
                  <Link className="transition-all" href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
