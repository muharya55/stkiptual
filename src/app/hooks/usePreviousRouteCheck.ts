'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface PreviousRouteInfo {
  hasPreviousRoute: boolean;
  isPreviousHome: boolean;
  previousPath: string | null;
}

export function usePreviousRouteCheck(): PreviousRouteInfo {
  const pathname = usePathname();
  const previousPathRef = useRef<string | null>(null);
  const [state, setState] = useState<PreviousRouteInfo>({
    hasPreviousRoute: false,
    isPreviousHome: false,
    previousPath: null,
  });

  useEffect(() => {
    setState({
      hasPreviousRoute: previousPathRef.current !== null,
      isPreviousHome: previousPathRef.current === '/',
      previousPath: previousPathRef.current,
    });

    previousPathRef.current = pathname;
  }, [pathname]);

  return state;
}
