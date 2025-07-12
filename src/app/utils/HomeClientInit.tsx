'use client';

import { usePreviousRouteCheck } from 'app/hooks/usePreviousRouteCheck';
import { usePathname } from 'next/navigation';
 
export default function HomeClientInit() {
  const pathname = usePathname()
 
  const { hasPreviousRoute,   previousPath } = usePreviousRouteCheck();

  if (hasPreviousRoute&& pathname =='/'&&  previousPath !=null) {
    window.location.reload()
    return null
  }
   
  return null;
}
