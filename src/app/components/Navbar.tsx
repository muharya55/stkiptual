'use client';
import { useAllUtilities } from "lib/useUtilities";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

 

const Navbar = () => {

    const pathname = usePathname() =='/';
    const margintop = pathname ? "1px" : "-40px";
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
      <div className="" style={{position:"fixed",width:"100%",zIndex:"99",marginTop:margintop}}>
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
                {/* <WowInitializer/> */}

            <nav className="uni-navbar navbar navbar-expand-lg pt-0 pb-0 z-3 bg-white">
            <div className="container demo-submenu-rsv1">
                <div className="col-md-2 uni-navbar__logo">
                <Link href="/">
                    <Image
                        width={200}
                        height={100}
                        src="/images/logo/bg-univ.jpeg"
                        style={{ backgroundColor: "#000" }}
                        alt="Logo"
                    
                    className="navbar__logo bg-transparent w-50"
                    />
                </Link>
                </div>
                <div className="col-md-8 uni-navbar__menu">
                {/* <HamburgerMenu/> */}
                <div className="bars-btn d-none">
                    <span className="iconify fs-24" data-icon="fe:bar" />
                </div>
                <div className="navbar-custom ">
                    <div className="">
                    <ul className="navbar-nav gap-22px justify-content-center">
                        <li className="nav-item navbar-close d-none">
                            <i className="iconify fs-12" data-icon="teenyicons:left-outline" />
                            <span>Close</span>
                        </li>
                        {/* <li className="nav-item main-dropdown-menu demo-submenu-rsv2">
                            <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all setNav2nd">
                            <>
                            <span className="">Tentang STKIP</span>
                            
                            <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                            </>
                            </Link>
                            <ul className="main-dropdown-menu__sub" >
                            <li className="nav-item closesetNav2nd d-none">
                                <i className="iconify fs-12" data-icon="teenyicons:left-outline"></i>
                                <span>Tentang STKIP</span>
                            </li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/sejarah">Sejarah Singkat</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/visimisi">Visi, Misi, Tujuan dan Sasaran</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/struktur-organisasi">Struktur Organisasi</Link></li>
                            </ul>
                        </li> */}
                        <li className="nav-item main-dropdown-menu"> 
                            <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all setNav2nd">
                            Tentang STKIP
                            <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                            </Link>
                            <ul className="main-dropdown-menu__sub">
                            <li className="nav-item closesetNav2nd d-none">
                                <i className="iconify fs-12" data-icon="teenyicons:left-outline"></i>
                                <span>Tentang STKIP</span>
                            </li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/sejarah">Sejarah Singkat</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/visimisi">Visi, Misi, Tujuan dan Sasaran</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/struktur-organisasi">Struktur Organisasi</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item main-dropdown-menu"> 
                            <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all setNav2nd">
                            Akademik
                            <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                            </Link>
                            <ul className="main-dropdown-menu__sub">
                            <li className="nav-item closesetNav2nd d-none">
                                <i className="iconify fs-12" data-icon="teenyicons:left-outline"></i>
                                <span>Akademik</span>
                            </li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/program-studi">Prodi</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/biaya-pendidikan">Informasi Biaya Pendidikan</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/kalender-akademik">Kalender Akademik</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/panduan-akademik">Buku Pedoman Akademik</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item main-dropdown-menu">
                            <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all">
                            Lembaga
                            <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                            </Link>
                            <ul className="main-dropdown-menu__sub">
                            <li className="main-dropdown-menu__sub_items"><Link href="#">LPM (Coming Soon)</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="#">LP2M (Coming Soon)</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item main-dropdown-menu">
                            <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all">
                            Biro
                            <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                            </Link>
                            <ul className="main-dropdown-menu__sub">
                            <li className="main-dropdown-menu__sub_items"><Link href="/biro-akademik">Biro Akademik</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/biro-keuangan">Keuangan</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/biro-informasi">TI</Link></li>
                            <li className="main-dropdown-menu__sub_items"><Link href="/biro-sdm">SDM</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link href="/kemahasiswaan" className="d-block pt-25px pb-25px fw-medium transition-all">
                            Kemahasiswaan
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/unduhan" className="d-block pt-25px pb-25px fw-medium transition-all">
                            Download
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/kontak" className="d-block pt-25px pb-25px fw-medium transition-all">
                            Kontak
                            </Link>
                        </li>
                    </ul>

                    </div>
                </div>
                </div>
                <div className="col-md-2 uni-navbar__apply">
                <ul className="notification-auth d-flex align-items-center justify-content-end">
                    {/* <ul className="notification-auth d-flex align-items-center">
                        <li>
                        <Link href="#" className="search__icon">
                            <i
                            className="iconify fs-24 cursor-pointer"
                            data-icon="iconamoon:search"
                            />
                        </Link>
                        </li>
                    </ul> */}
                    <Link href="#" className="uni-button transition-all search__icon">
                    <i
                            className="iconify fs-24 cursor-pointer"
                            data-icon="iconamoon:search"
                            />
                    </Link>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar
