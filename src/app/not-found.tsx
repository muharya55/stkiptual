// import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-404 mt-80px mb-80px">
      <div className="container">
        <div className="row align-items-center p-80px page-404__wrapper">
          <div className="col-md-6">
            <div className="page-404__image">
              <img src="/images/404-page.png" alt="" className="mb-5 mb-md-0" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="page-404__content">
              <h2 className="page-404__title mb-10px text-capitalize">
                404 <span className="page-404__hl">error!</span>
              </h2>
              <p>Sorry, we can t find the page you are looking for. Please go to</p>
              <a
                href="index.html"
                className="page-404__back transition-all text-capitalize"
              >
                Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
