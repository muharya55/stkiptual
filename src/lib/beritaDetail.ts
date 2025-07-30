export async function getBeritaDetail(slug: string) {
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  // console.log(`${apiUrl}/api/artikel/${slug}`);
  try {
      const res = await fetch(`${apiUrl}/api/artikel/${slug}`, {
          // cache: 'no-store', // paksa ambil data baru setiap kali
          next: { revalidate: 3600 }, // cache selama 1 jam
        });
        
        
    if (!res.ok) {
      throw new Error(`Gagal fetch data: ${res.status}`);
    }

    const json = await res.json();
    console.log(json);
    return json;  
  } catch (error) {
    console.error('Error fetch detail artikel:', error);
    return null;
  }
}
