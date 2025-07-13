 'use client'

import { useStrukturOrganisasi } from "lib/useStrukturOrganisasi";
import Image from "next/image"

type TeamMember = {
  nama: string;
  jabatan: string;
  gambar: string;
   kategori: string; // ← Tambahkan kategori untuk mengelompokkan
};

const Struktur = () => {
    const {data :team,isLoading,isError} = useStrukturOrganisasi()
    
    if (isLoading) return <p className="text-center">Loading Struktur Organisasi...</p>;
    if (isError) return <p className="text-center text-danger">Gagal memuat Struktur Organisasi.</p>;

    const groupedTeam: Record<string, TeamMember[]> = team.reduce((acc: { [x: string]: any[]; }, member: { kategori: string | number; }) => {
    if (!acc[member.kategori]) acc[member.kategori] = [];
    acc[member.kategori].push(member);
    return acc;
    }, {} as Record<string, TeamMember[]>);
  // console.log(groupedTeam);

  return (
    <>
      <div className="">
        {Object.entries(groupedTeam).map(([kategori, members]) => (
                  <div key={kategori} className="mb-5">
                    <h5 className="text-center text-uppercase fw-bold mb-4">{kategori}</h5>
                    <div className="row justify-content-center">
                      {members.map((member, index) => (
                        <div key={index} className="col-md-3 text-center mb-4">
                          <Image
                            // src={member.gambar}
                            alt={member.nama}
                            width={200}
                            height={100}
                            // style={{
                            //   objectFit: "cover",
                            //   borderRadius: "50%",
                            //   border: "1px solid #ccc",
                            // }}                      
                                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${member.gambar}` || '/images/berita-1.jpeg'}

                            className="mb-2"
                          />
                          <div className="fw-bold">{member.nama}</div>
                          <div className="text-muted small">{member.jabatan}</div>
                          {member.jabatan && (
                            <div className="fst-italic small mt-1">{member.jabatan}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
      </div>
    </>
  )
}

export default Struktur
