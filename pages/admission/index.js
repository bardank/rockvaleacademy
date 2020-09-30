import React from 'react'
import Link from 'next/link'
const Admission = props => {
    return (
        <div className='admission'>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center py-4">
                        <h1 className=" text-uppercase common-title">ABOUT US</h1>
                    </div>
                </div>
                 <h3 className='mx-md-4'>What are the requirements ?</h3>
                <div className="row">
                    <div className="col-md-5 col-11 mx-auto my-2">
                        <h5 className='font-weight-bold'>For Grade XI:</h5>
                        <ol className='text-muted'>
                            <li>Duly completed registration form</li>
                            <li>Two passport size photographs</li>
                            <li>Original Transfer Certificate</li>
                            <li>Duly attested copy of SEE Mark Sheet</li>
                        </ol>
                    </div>
                    <div className="col-md-5 col-11 mx-auto my-2">
                        <h5 className='font-weight-bold'>For Pre School to XI</h5>
                        <ol className='text-muted'>
                            <li>Duly completed registration form.</li>
                            <li>A copy of Birth Certificate <em>(Original to be produced for verification)</em>.</li>
                            <li>Original Transfer Certificate</li>
                            <li>Duly attested copy of last school Progress Report Card</li>
                            <li>Three passport size photographs</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center my-5 ">
                        <h5 className=" text-danger font-weight-bold ">
                            *Click below for online admission form.
                        </h5>
                        <Link href='/' passHref>
                            <a className='btn btn-primary mt-1'> Online form</a>
                           
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admission;
