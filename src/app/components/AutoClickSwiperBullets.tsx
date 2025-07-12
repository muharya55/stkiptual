'use client';
import { JSX, useEffect } from 'react';

const AutoClickSwiperBullets = (): JSX.Element | null => {
useEffect(() => {
  const checkExist = setInterval(() => {
    const bullets = document.querySelectorAll('.swiper-pagination-bullet') as NodeListOf<HTMLElement>;

    if (bullets.length > 0) {
      let index = 0;
      setInterval(() => {
        bullets[index].click();
        index = (index + 1) % bullets.length;
      }, 1500);

      clearInterval(checkExist); // Stop pengecekan
    }
  }, 200); // Cek tiap 200ms

  return () => clearInterval(checkExist);
}, []);

  return null;
};

export default AutoClickSwiperBullets;
