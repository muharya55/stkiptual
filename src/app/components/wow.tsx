'use client';

import { useEffect } from 'react';
import WOW from 'wowjs';

export default function WowInitializer() {
  useEffect(() => {
    new WOW().init();
  }, []);

  return null;
}
