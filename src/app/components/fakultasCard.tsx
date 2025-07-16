 
type Jurusan = { nama: string };

type FakultasCardProps = {
  singkatan: string;
  nama: string;
  program: string;
  jurusan: Jurusan[];
};

const FakultasCard = ({ singkatan, nama, program, jurusan }: FakultasCardProps) => {
  // console.log(jurusan);
  
  return (
    <div className="col-md-6 mb-4">
      {/* Header Singkatan + Nama */}
      <div className="d-flex align-items-center gap-3">
        <div>
          <h5 className="text-primary m-0">
            <strong>{singkatan}</strong>
          </h5>
          <p className="text-secondary mb-2">{nama}</p>
        </div>
      </div>

      {/* Program */}
      <div
        className="bg-gradient bg-primary w-100 d-inline-flex align-items-center px-4 py-2 rounded-pill mb-2"
        style={{
          color: "#FFF300",
          background: "linear-gradient(to right, #1e90ff, #0d47a1)",
        }}
      >
        <span style={{ fontSize: "1.2rem" }}>&#10140;&nbsp;</span>
        <strong>{program}</strong>
      </div>

      {/* Jurusan List */}
      <ul className="text-secondary mt-2">
        {jurusan.length > 0 ? (
          jurusan.map((item, idx) => (
            <li className="with-list" key={idx}>
              {item.nama}
            </li>
          ))
        ) : (
          <li className="with-list">Belum ada jurusan</li>
        )}
      </ul>
    </div>
  );
};

export default FakultasCard;
