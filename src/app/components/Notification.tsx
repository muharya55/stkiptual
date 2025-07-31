'use client'
import { useAllUtilities } from "lib/useUtilities";
import Link from "next/link"
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Notification = () => {
    const { data :util, isLoading, isError } = useAllUtilities();

    if (isLoading) return <p>Memuat data...</p>;
    if (isError) return <p>Gagal memuat data struktur.</p>;
    if (!util) return <p>Data tidak ditemukan.</p>; 

    // console.log(util);
    
    const selectedIds = ['telephone-icon','email-icon','whatsapp-icon','facebook-icon','instagram-icon','youtube-icon','gmail-icon']

    const hasil = util.filter((ut :{slug:string}) => selectedIds.includes(ut.slug))
   
    const whatsapp = hasil.find((item: {slug:string}) => item.slug==='whatsapp-icon')
    const gmail = hasil.find((item: {slug:string}) => item.slug==='gmail-icon')
    const youtube = hasil.find((item: {slug:string}) => item.slug==='youtube-icon')
    const instagram = hasil.find((item: {slug:string}) => item.slug==='instagram-icon')
    const facebook = hasil.find((item: {slug:string}) => item.slug==='facebook-icon')
    const email = hasil.find((item: {slug:string}) => item.slug==='email-icon')
    const telephone = hasil.find((item: {slug:string}) => item.slug==='telephone-icon')
 
  return (
    <>
         <section className="uni-notification">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-6 col-md-5">
                    <div className="d-flex flex-wrap align-items-center gap-10px">
                    <div className="notification__phone d-flex align-items-center gap-5px">
                        <i className="iconify fs-18" data-icon="iconoir:phone" />
                        <span className="d-none d-xl-block">{telephone?.deskripsi ||''}</span>
                    </div>
                    <div className="notification__mail d-flex align-items-center gap-5px">
                        <i className="iconify fs-18" data-icon="tabler:mail-check" />
                        <span className="d-none d-xl-block">
                        <Link
                            href="#"
                            className="__cf_email__"
                            data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        >
                            {email?.deskripsi ||''}
                        </Link>
                        </span>
                    </div>
                    
                    </div>
                </div>
                <div className="col-6 col-md-7">
                    <div className="d-flex align-items-center justify-content-end">
                    {/* <div className=""></div> */}
                    <div className="px-3">
                        <Link href={facebook?.url ||'#'} className="__cf_email__ px-1" data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        > <BsFacebook size={21} />
                        </Link>
                        <Link href={instagram?.url ||'#'} className="__cf_email__ px-1" data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        > <BsInstagram size={21} />
                        </Link>
                        <Link href={youtube?.url ||'#'} className="__cf_email__ px-1" data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        > <BsYoutube size={21} />
                        </Link>
                        <Link href={whatsapp?.url ||'#'} className="__cf_email__ px-1" data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        > <BsWhatsapp size={21} />
                        </Link> 
                        <Link href={gmail?.url ||'#'} className="__cf_email__ px-1" data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        > <CiMail size={21} />
                        </Link>
  
                          
                    </div> 
                    <ul className="notification-page d-flex align-items-center">
                        <li className="d-none d-xl-block">
                        <Link href="#">Campus</Link>
                        </li>
                        <li className="d-none d-xl-block">
                        <Link href="#">Research</Link>
                        </li>
                        <li className="d-none d-xl-block">
                        <Link href="#">Community</Link>
                        </li>
                        <li className="d-none d-xl-block">
                        <Link href="#">Faculty &amp; staff</Link>
                        </li>
                        <li className="d-none d-xl-block">
                        <Link href="#">Alumni</Link>
                        </li>
                    </ul>
                    
                    </div>
                </div>
                </div>
            </div>
            </section>
    </>
  )
}

export default Notification
