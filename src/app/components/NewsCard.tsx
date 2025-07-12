import Image from "next/image";

type NewsCardProps = {
  image: string;
  title: string;
  date: string;
  excerpt: string;
  link: string;
};
const NewsCard = ({ image, title, date, excerpt, link }: NewsCardProps) => {
  return (
    <div className="news-card">
      <Image src={image} alt={title} width={300} height={180} />
      <h5>{title}</h5>
      <p className="date">{date}</p>
      <p>{excerpt}</p>
      <a className="read-more" href={link}>Baca Selengkapnya &raquo;</a>
    </div>
  );
};

export default NewsCard;
