
import React from "react";
import Script from "next/script";
import Link from "next/link";   
import HomeClientInit from "./utils/HomeClientInit";
import Footer from "./section/footer";
import Navbar from "./components/Navbar";
import SearchBerita from "./section/SearchBerita";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>

      <title>STKIP EVAV TUAL </title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="Arya Wardhana" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="STKIP EVAV PERSADA TUAL"
      />
      {/* Favicon icon */}
      <link rel="shortcut icon" href="/images/logo/bg-univ-2.PNG" />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="/images/logo/bg-univ-2.PNG"
      />
      {/* <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/images/apple-touch-icon-192x192.png"
      /> */}
      {/* Style */}
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="assets/css/lightbox.css" />
      <link rel="stylesheet" href="assets/css/nouislider.min.css" />
      <link rel="stylesheet" href="assets/css/style2cc5.css?v=5.6" />
      <link rel="stylesheet" href="assets/css/demos/university2cc5.css?v=5.6" />
      {/* Wow */}
      <link rel="stylesheet" href="assets/css/animate.css" />
      </head>
     
      <body className='uni-layout'>
      <HomeClientInit/>

    {/* <div id="loading-placeholder" style={{ position: 'fixed', inset: 0, background: '#fff', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      Loading...
    </div> */}
  {/* <div className="" style={{position:"fixed",width:"100%",zIndex:"99"}}> */}
   <Navbar/>
  <div className="" style={{paddingTop:"4.5rem"}}>
    {children}  
  </div>

  <Footer></Footer>
  <div className="scroll-progress d-none">
    <Link href="#" className="scroll-progress__link">
      <span className="iconify fs-18" data-icon="grommet-icons:up" />
      <span className="scroll-progress__line scroll-progress__uni">
        <span id="scr-progress" className="" />
      </span>
    </Link>
  </div>
  <SearchBerita/>
  {/* <div className="search-wrapper">
    <div className="search-overlay" />
    <div className="search-popup">
      <form action="#" method="GET">
        <input
          type="text"
          id="search-input"
          name="search-query"
          placeholder="Cari Halaman ..."
        />
        <button type="submit">
          <i
            className="iconify fs-22 text-white eye-on search-popup_icon"
            data-icon="iconamoon:search"
          />
        </button>
      </form>
    </div>
  </div> */}
  <div className="modal-form-login uni-form-login">
    <div className="container">
      <div className="row">
        <div className="form-login">
          <div className="form-login__wrapper p-50px pb-80px text-center">
            <h5 className="fw-bolder mb-30px">Login with your site account</h5>
            <form action="#" method="POST">
              <input
                type="text"
                name="user"
                placeholder="Username or email"
                
              />
              <div className="password-container">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  
                />
                <span id="pw-show-hide" className="pw-show-hide">
                  <i
                    className="iconify fs-18 eye-on"
                    data-icon="fa-solid:eye"
                  />
                  <i
                    className="iconify fs-20 eye-off"
                    data-icon="ion:eye-off"
                  />
                </span>
              </div>
              <div className="form-login__remember d-flex align-items-center justify-content-between">
                <label className="d-flex align-items-center gap-5px cursor-pointer">
                  <input type="checkbox" name="remember_me" /> Remember Me
                </label>
                <Link
                  href="lostpassword.html"
                  className="form-login__lost transition-all"
                >
                  Lost your password?
                </Link>
              </div>
              <input
                type="submit"
                defaultValue="Login"
                className="form-login__submit transition-all"
              />
            </form>
            <div className="d-flex align-items-center justify-content-center gap-10px mb-10px">
              <p>Not a member yet?</p>
              <Link
                href="#"
                className="form-login__register transition-all handle-register"
              >
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal-form-register uni-form-register">
    <div className="container">
      <div className="row">
        <div className="form-register">
          <div className="form-register__wrapper p-50px pb-80px text-center">
            <h5 className="fw-bolder mb-30px">Register a new account</h5>
            <form action="#" method="POST">
              <input
                type="text"
                name="user_name"
                placeholder="Username"
                
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
               />
              <input
                type="password"
                name="repeat_password"
                placeholder="Repeat Password"
                 
              />
              <input
                type="submit"
                defaultValue="Sign Up"
                className="form-register__submit transition-all"
              />
            </form>
            <div className="d-flex align-items-center justify-content-center gap-10px mb-10px">
              <p>Are you a member?</p>
              <Link
                href="#"
                className="form-register__register transition-all handle-login"
              >
                Login now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 

        
      {/* <Script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></Script> */}
      <Script strategy="afterInteractive" src="assets/js/iconify.min.js"></Script>
      <Script strategy="afterInteractive" src="assets/js/swiper-bundle.min.js"></Script>
      <Script strategy="afterInteractive" src="assets/js/swiper-control2cc5.js?v=5.6"></Script>
      <Script strategy="beforeInteractive" src="assets/js/main2cc5.js?v=5.6"></Script>
      <Script strategy="afterInteractive" src="assets/js/wow.min.js"></Script> 
      <Script strategy="afterInteractive" src="assets/js/main.js"></Script>
     

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                const loading = document.getElementById('loading-placeholder');
                if (loading) loading.style.display = 'none';
              });
            `,
          }}
        /> */}
{/* <script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="text/javascript" src="../assets/js/iconify.min.js" defer></script>
<script type="text/javascript" src="../assets/js/swiper-bundle.min.js" defer></script>
<script type="text/javascript" src="../assets/js/swiper-control2cc5.js?v=5.6" defer></script>
<script type="text/javascript" src="../assets/js/main2cc5.js?v=5.6" defer></script>
<script type="text/javascript" src="../assets/js/wow.min.js" defer></script> */}
{/* 
<script>
    document.addEventListener('DOMContentLoaded', function() {
        new WOW().init();
    });
</script> */}

      </body>
    </html>
  );
}
