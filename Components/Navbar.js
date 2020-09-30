import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";


const Navigation = props => {
    const [showNav, setShowNav] = useState(false)
    const navIcon = function(){
        setShowNav(!showNav)
    }

    return (
    <header >
      <nav className={showNav ?' navigation navigation-show': ' navigation '}>
        <button type="button" className="navbar-toggler hamburger-menu" onClick={navIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </button>
        <div className="bg-cover"></div>
        <div className="nav-content collapse" >
          <div className="conatiner-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <ul className="navbar-nav d-flex flex-lg-row flex-column nav-justified">
                  <NavItem onClick={()=> navIcon()} link='/' title='HOME' />
                  <NavItem link='/gallery' title='GALLERY' />
                  <NavItem link='/admission' title='ADMISSION' />
                  <NavItem link='/aboutus' title='ABOUT US' />
                  <NavItem link='/contact' title='CONTACT' />
                </ul>
              </div>
              {/* <div className="container">
                <div className="row my-1 my-lg-5">
                  <div className="col-11 mx-auto text-center">
                    <h1 className="display-5 text-white">Your Chance</h1>
                    <h3 className="text-capitalize text-light">book a room starting <span className="text-danger"> @Rs.799 </span>  only</h3>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row py-2 py-lg-4 ">
          <div className="col mx-auto text-center ">
           <img className='logo' src='./images/logo.jpg' />
           <h1 className="display-5 text-white">Rockvale Secondary Academy</h1>
          </div>
        </div>
      </div>
    </header>
    )
}




function NavItem(props) {
    const router = useRouter();
   
    return (
      <li className="nav-item" >
            <Link  href={props.link} passHref >
                <a onClick={props.onClick}  className={router.pathname  === props.link ? "active nav-link m-3 link-item" : "nav-link m-3 link-item "} >
                {props.title}
                </a>
            </Link>
        </li>
    )
}

export default Navigation;
