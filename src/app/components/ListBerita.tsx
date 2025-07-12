import Image from "next/image";

 
 interface Course {
  id: number;
  title: string;
  thumbnail: string;
  avatar: string;
  instructor: string;
  description: string;
  lessons: number;
  students: number;
  price: string;
  salePrice: string;
  courseLink: string;
  instructorLink: string;
}

 const coursesData: Course[] = [
  {
    id: 1,
    title: "Introduction LearnPress – LMS plugin",
    thumbnail: "/images/courses/courses-large-01.png",
    avatar: "/images/avatar/user.png",
    instructor: "Keny White",
    description:
      "A WordPress LMS Plugin to create WordPress Learning Management System. Turn your WP to LMS WordPress with Courses, Lessons, Quizzes",
    lessons: 20,
    students: 365,
    price: "$69.00",
    salePrice: "$39.00",
    courseLink: "courses-details.html",
    instructorLink: "instructors-details.html",
  },
  {
    id: 3,
    title: "Introduction LearnPress – LMS plugin",
    thumbnail: "/images/courses/courses-large-01.png",
    avatar: "/images/avatar/user.png",
    instructor: "Keny White",
    description:
      "A WordPress LMS Plugin to create WordPress Learning Management System. Turn your WP to LMS WordPress with Courses, Lessons, Quizzes",
    lessons: 20,
    students: 365,
    price: "$69.00",
    salePrice: "$39.00",
    courseLink: "courses-details.html",
    instructorLink: "instructors-details.html",
  },
  {
    id: 2,
    title: "Introduction LearnPress – LMS plugin",
    thumbnail: "/images/courses/courses-large-01.png",
    avatar: "/images/avatar/user.png",
    instructor: "Keny White",
    description:
      "A WordPress LMS Plugin to create WordPress Learning Management System. Turn your WP to LMS WordPress with Courses, Lessons, Quizzes",
    lessons: 20,
    students: 365,
    price: "$69.00",
    salePrice: "$39.00",
    courseLink: "courses-details.html",
    instructorLink: "instructors-details.html",
  }
];

const ListBerita = () => {
  return (
    <>
      {coursesData.map((course) => (
      <article className="courses-layout-1__items" key={course.id}>
        <div className="courses-layout-1__thumbnail">
          <figure className="position-relative">
            <a href={course.courseLink}>
              <Image
                src={course.thumbnail}
                alt={course.title}
                width={300}
                height={200}
                className="img-courses"
              />
            </a>
            <a
              href={course.courseLink}
              className="courses-layout-1__square position-absolute"
            >
              <i
                className="iconify fs-32 text-white"
                data-icon="la:external-link-square-alt"
                aria-label="External link"
              />
            </a>
          </figure>
        </div>
        <div className="courses-layout-1__content position-relative text-center pt-10px pb-10px pe-20px ps-20px">
          
          <h6 className="courses-layout-1__title fs-18 fw-semibold text-capitalize mb-10px pb-10px">
            <a
              href={course.courseLink}
              className="transition-all line-clamp-2"
            >
              {course.title}
            </a>
          </h6>
          <p className="courses-layout-1__desc line-clamp-2 mb-20px">
            {course.description}
          </p>
          <div className="courses-layout-1__wrap d-flex flex-wrap align-items-center gap-10px justify-content-between">
            <div className="d-flex align-items-center gap-10px">
              <span className="courses-layout-1__lesson d-flex align-items-center gap-5px">
                <i
                  className="iconify fs-16"
                  data-icon="majesticons:list-box-line"
                />
                <span>{course.lessons}</span>
              </span>
              <span className="courses-layout-1__student d-flex align-items-center gap-5px">
                <i
                  className="iconify fs-20"
                  data-icon="fluent:people-48-regular"
                />
                <span>{course.students}</span>
              </span>
            </div>
           
          </div>
        </div>
      </article>
    ))}
 
    </>
  )
}

export default ListBerita
