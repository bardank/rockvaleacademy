import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types'

const events = props => {
    return (
        <div className="row my-4">
            <div className="col-md-6 col-12 mx-auto my-2 ">
                <h3>Notices</h3>
                <div className='notice text-muted'>
                    <li>Admission open for the adacemic year 2077 BS from playgroup to class 10.
                        Click 
                    <Link  href="/" passHref><a> here </a></Link> to fill up the form. <em className='font-family-itallic'>published on 2th shrawn 2077</em>
                    </li>
                    <li>Results will soon be published on 22th of Shrawn. <em>published on 12 Ashar 2077</em> 
                    </li>
                </div>
            </div>
            <div className="col-md-5 col-12 mx-auto my-2">
                <h3>Upcoming Events</h3>
                <div className="events">
                    
                </div>
            </div>
        </div>
    )
}

events.propTypes = {

}

export default events
