'use client';
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';

 

const Navbar = () => {

  const pathname = usePathname() =='/';
//   console.log({pathname});
  const margintop = pathname ? "1px" : "-40px";
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
                        <span className="d-none d-xl-block">(+88) 1990 6886</span>
                    </div>
                    <div className="notification__mail d-flex align-items-center gap-5px">
                        <i className="iconify fs-18" data-icon="tabler:mail-check" />
                        <span className="d-none d-xl-block">
                        <Link
                            href="https://html.thimpress.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        >
                            [email&nbsp;protected]
                        </Link>
                        </span>
                    </div>
                    
                    </div>
                </div>
                <div className="col-6 col-md-7">
                    <div className="d-flex align-items-center justify-content-end">
                    {/* <div className=""></div> */}
                    <div className="px-3">
                        <span className="iconify fs-24 mr-10px " data-icon="entypo-social:facebook" >
                        <Link
                            href="https://html.thimpress.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        >
                            [email&nbsp;protected]
                        </Link>
                        </span>
                        <span className="iconify fs-24 mr-10px" data-icon="entypo-social:instagram" >
                        <Link
                            href="https://html.thimpress.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        >
                            [email&nbsp;protected]
                        </Link>
                        </span>
                        <span className="iconify fs-24 mr-10px" data-icon="entypo-social:youtube" >
                        <Link
                            href="https://html.thimpress.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        >
                            [email&nbsp;protected]
                        </Link>
                        </span>
                        <span className="iconify fs-24 mr-10px" data-icon="tabler:brand-whatsapp" >
                        <Link
                            href="https://html.thimpress.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        >
                            [email&nbsp;protected]
                        </Link>
                        </span>
                        <span className="iconify fs-24 mr-10px" data-icon="tabler:brand-gmail" >
                        <Link
                            href="https://html.thimpress.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="04676b6a7065677044706c6d6974766177772a676b69"
                        >
                            [email&nbsp;protected]
                        </Link>
                        </span>
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
