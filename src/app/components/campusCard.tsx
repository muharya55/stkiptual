import Image from "next/image";

const CampusCard = ({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) => {
  return (
    <>
      <div className="rounded overflow-hidden shadow-sm bg-white">
        <div className="position-relative" style={{ height: "250px" }}>
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px",cursor:"pointer" }}
          />
        </div>
        <div
          className="bg-warning text-white text-center fw-bold py-3 position-relative"
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            zIndex:92
          }}
        >
          {label}
        </div>
      </div>
    </>
  );
};

export default CampusCard;
