import React from 'react'

const Footer = props => {
    return (
        <footer className="pt-4 text-white">
        {/* <div className="row py-3">
          <div className="col text-center">
            <div className="mb-2">
              <a href="#" className="mx-sm-4 mx-2"><i className="fab fa-facebook fa-2x text-primary"></i></a>
              <a href="#" className="mx-sm-4 mx-2"><i className="fab fa-twitter fa-2x text-info"></i></a>
              <a href="#" className="mx-sm-4 mx-2"><i className="fab fa-instagram fa-2x text-danger"></i></a>
              <a href="tel:+9779818988535" className="mx-sm-4 mx-2"><i className="fas fa-phone fa-2x text-warning"></i></a>
            </div>
          </div>
        </div> */}
        <div className="row py-3">
          <div className="col text-center">
            <ul className='p-0'>
              <li className="lead ">lalbandi-7, Sarlahi</li>
              <li className="lead">Tel +977 046 505512</li>
              <li className="lead">rockvaleacademy@gamil.com</li>
            </ul>
          </div>
        </div>
       
        <div className='row bg-dark'>
          <div className="col-12 col-lg-6 order-lg-0 order-5">
            <p className="lead copyright  text-secondary">&copy; Copyright 2020 Rockvale Secondary Academy. All Rights Reserved</p>
          </div>
          <div className="col-12 col-lg-6 order-lg-2 order-3 ">
            <div className="p-2 footer-icon">
              <a href="#" className=" mx-1"><i className="fab fa-facebook fa-2x text-secondary"></i></a>
              <a href="#" className=" mx-1"><i className="fab fa-twitter fa-2x text-secondary"></i></a>
              <a href="#" className=" mx-1"><i className="fab fa-instagram fa-2x text-secondary"></i></a>
              <a href="tel:+9779818988535" className=" mx-1"><i className="fas fa-phone fa-2x text-secondary"></i></a>
            </div>
          </div>
        </div>
        
      </footer>
    )
}


export default Footer
