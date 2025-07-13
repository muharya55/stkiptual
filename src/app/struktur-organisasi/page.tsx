import Sidebar from 'app/components/sidebar'
import Struktur from 'app/components/struktur';
import { MenuItems1 } from 'app/data/menu'
 
// const groupedTeam: Record<string, TeamMember[]> = team.reduce((acc, member) => {
//   if (!acc[member.kategori]) acc[member.kategori] = [];
//   acc[member.kategori].push(member);
//   return acc;
// }, {} as Record<string, TeamMember[]>);

const StrukturOrganisasi = () => {
 
  // console.log(groupedTeam);
  
  return (
    <section className="events-details mt-40px mb-80px">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-3 col-lg-4">
            <div className="sidebar sidebar-left">
              <div className="widget">
                <Sidebar data={MenuItems1} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-12 col-lg-9 mb-30px mb-lg-0">
            <h3 className="text-primary fw-bold mb-2">
              Struktur Organisasi STKIP TUAL
            </h3>
            <div
              className="border-bottom border-primary"
              style={{
                borderWidth: "3px",
                position: "relative",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "3px",
                  backgroundColor: "gold",
                  position: "absolute",
                  bottom: 0,
                }}
              ></div>
            </div>

             <div className="mb-5">
              {/* <div className="text-center mb-2">
             <h6 className="text-uppercase fw-bold mb-1">Ketua</h6>
              </div> */}

                <Struktur/> 

              </div>
                
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrukturOrganisasi
