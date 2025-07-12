type FakultasCardProps = {
  kode: string;
  nama: string;
  program: string;
  prodi: string[];
};

const FakultasCard = ({ kode, nama, program, prodi }: FakultasCardProps) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="d-flex align-items-center gap-3">
         
        <div>
          <h5 className="text-primary m-0"> <strong>{kode}</strong></h5>
          <p className="text-secondary mb-2">{nama}</p>
        </div>
      </div>
      <div className="bg-gradient bg-primary w-100  d-inline-flex align-items-center px-4 py-2 rounded-pill mb-2" style={{ color:"#FFF300", background: "linear-gradient(to right, #1e90ff, #0d47a1)" }}>
        <span style={{ fontSize: "1.2rem" }}>&#10140;&nbsp;</span>
        <strong>{program}</strong>
      </div>
      <ul className="text-secondary mt-2">
        {prodi.map((item, idx) => (
          <li className="with-list" key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FakultasCard;
