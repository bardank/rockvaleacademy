import React from 'react'

const ContactUs = props => {
    return (
        <div className='contactus '>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center py-4">
                        <h1 className=" text-uppercase common-title">CONTACT US</h1>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-md-5 col-11 mx-auto my-2">
                        <h1 className="text-muted font-weight-light text-center mb-5">Stay Connected</h1>
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control py-2 mb-2" placeholder="Name" />
                                <input type="email" className="form-control py-2 mb-2" placeholder="Email" />
                                <textarea className="form-control mb-3" placeholder="Message" rows="3"></textarea>
                                <input type="submit" className="form-control btn-outline-danger"/>
                            </div>
                        </form>
                    </div>
                    <div className=" col-md-5 col-11 mx-auto mb-4 my-2">
                        <img src="./images/map.png" className="img-fluid gallery-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
