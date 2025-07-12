import ListBerita from "app/components/ListBerita"

 
const Page = () => {
  return (
    <>
        <section className="courses-page courses-list-v2 mt-30px mb-80px">
            <div className="container">
                <button className="courses-filter-mobile cursor-pointer text-uppercase fw-semibold d-block mb-30px d-md-none">
                <span>Filter</span>
                </button>
                <div className="courses-list-v2__wrapper">
                <div className="row">
                    <div className="col-12 col-lg-12 mb-30px mb-lg-0">
                    <div className="ed-courses-head d-flex flex-wrap align-items-center justify-content-between gap-20px mb-30px">
                        <div className="ed-courses-head_view d-flex align-items-center gap-15px">
                        <div className="d-flex align-items-center gap-5px">
                           
                            <span className="cursor-pointer courses-view-default courses-view-list transition-all active">
                            <i className="iconify fs-18" data-icon="fa6-solid:list" />
                            </span>
                        </div>
                        <p className="courses-result">Showing 1 - 10 of 15 results</p>
                        </div>
                        <div className="d-flex flex-wrap align-items-center gap-15px justify-content-between">
                         
                        <form className="ed-courses-head_search">
                            <input
                            type="text"
                            defaultValue=""
                            name=""
                            placeholder="Search our courses"
                            className="search-input"
                            />
                            <i
                            className="iconify fs-14 search-icon"
                            data-icon="lucide:search"
                            />
                        </form>
                        </div>
                    </div>
                    <div className="courses-type list-view">
                        <ListBerita/>
                    </div>
                        <div className="pagination">
                            <a href="#" className="pagination-prev pagination__page-numbers">
                            <i className="iconify fs-18" data-icon="mingcute:left-line" />
                            </a>
                            <a href="#" className="pagination__page-numbers active">
                            1
                            </a>
                            <a href="#" className="pagination__page-numbers">
                            2
                            </a>
                            <a href="#" className="pagination__page-numbers">
                            3
                            </a>
                            <a href="#" className="pagination-next pagination__page-numbers">
                            <i className="iconify fs-18" data-icon="mingcute:right-line" />
                            </a>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Page
