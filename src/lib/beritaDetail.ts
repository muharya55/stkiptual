export async function getBeritaDetail(slug: string) {
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  try {
      const res = await fetch(`${apiUrl}/api/artikel/${slug}`, {
          cache: 'no-store', // paksa ambil data baru setiap kali
        });
        
        console.log(res);
    if (!res.ok) {
      throw new Error(`Gagal fetch data: ${res.status}`);
    }

    const json = await res.json();
    return json.data; // sesuaikan dengan struktur respons API kamu
  } catch (error) {
    console.error('Error fetch detail artikel:', error);
    return null;
  }
}
