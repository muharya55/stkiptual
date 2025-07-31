'use client';

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import Notification from "./Notification";

 

const Navbar = () => {

    const pathname = usePathname() =='/';
        const margintop = pathname ? "1px" : "-40px";
    
  return (
    <>
    
      <div className="" style={{position:"fixed",width:"100%",zIndex:"99",marginTop:margintop}}>
           <Notification/>
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
                                <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all setNav2nd">
                                Lembaga
                                <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                                </Link>
                                <ul className="main-dropdown-menu__sub">
                                <li className="nav-item closesetNav2nd d-none">
                                    <i className="iconify fs-12" data-icon="teenyicons:left-outline"></i>
                                    <span>Lembaga</span>
                                </li>
                                <li className="main-dropdown-menu__sub_items"><Link href="#">LPM (Coming Soon)</Link></li>
                                <li className="main-dropdown-menu__sub_items"><Link href="#">LP2M (Coming Soon)</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item main-dropdown-menu">
                                <Link href="#" className="d-block pt-25px pb-25px fw-medium transition-all setNav2nd">
                                Biro
                                <i className="iconify fs-12 ml-10" data-icon="grommet-icons:down" />
                                </Link>
                                <ul className="main-dropdown-menu__sub">
                                    <li className="nav-item closesetNav2nd d-none">
                                    <i className="iconify fs-12" data-icon="teenyicons:left-outline"></i>
                                    <span>Biro</span>
                                </li>
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
                        <div className="search__icon">
                            <Link href="#" className="uni-button transition-all search__icon">
                            <i
                                    className="iconify fs-24 cursor-pointer"
                                    data-icon="iconamoon:search"
                                    />
                            </Link>
                        </div>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar
