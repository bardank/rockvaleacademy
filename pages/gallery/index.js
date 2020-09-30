import React from 'react'
import fetch from 'isomorphic-unfetch';
import {getAlbum} from '../../helper/google-photos'
const Gallery = props => {
    return (
        <div className='gallery d-flex justify-content-center'>
            <div className='row text-center'>
                <div className="col ">
                    <h3 className='text-center font-weight-bold'>Gallery</h3>
                    <div></div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-md-4 col-10">
                </div>
                <div className="col-md-4 col-10"></div>
                <div className="col-md-4 col-10"></div>
                <div className="col-md-4 col-10"></div>
                <div className="col-md-4 col-10"></div>
            </div> */}
        </div>
    )
}
// Gallery.getInitialProps = async(props)=>{
//     const res = await fetch('https://photos.app.goo.gl/fj5JrwQkb3b6tTUc7')
//     getAlbum(res)
//     return {}
// }

export default Gallery;
