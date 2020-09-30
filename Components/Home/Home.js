import React, {useState, useEffect, useRef} from 'react';
import {Carousel} from 'react-bootstrap';
import Events from './events';
import Letter from './Letter';

const Home = props => {


    return (
        <div className='home '>
            <ControlledCarousel />
            <section className='mx-3 mx-md-3'>
              <div className="row text-center my-4">
                <div className="col-md-7 col-10 mx-auto ">
                  <h2>What we do ?</h2>

                </div>
              </div>
              <div className="row my-3">
                  <div className="col-md-6 col-12 mx-auto  order-md-0 order-5">
                    <p>Rockvale Secondary Academy was stablished in 1998 AD in Lalbandi, Sarlahi with 400 students and 25 initial staffs. Today, it has become a full-fledged higher secondary school running classes from grade one to twelve. Upon completion of the construction of its own school building.</p>
                    <p> It has modern academic buildings with spacious classrooms, laboratories, conference hall, hostel buildings, administrative offices, a cafeteria and spacious playing grounds for games and sports such as football, basketball, etc. There are separate buildings and rooms for extra-curricular activities such as gymnastics, judo, keyboard, percussion, guitar, violin, sitar, etc.
                    </p>
                  </div>  
                  <div className="col-md-5 col-12 mx-auto order-md-2 order-3 ">
                    <img src="/images/school.jpg" alt="school-img" className='school-img py-md-0 py-3'/>
                  </div>
              </div>
              <Events />
            </section>
            <Letter/>
            
            {/* <style jsx>{`
                // .home{
                //     background: url('./home.jpg');
                //     background-size: cover;
                //     background-repeat: no-repeat;
                //     background-position: 50% 50%;
                // }
            `}</style> */}
        </div>
    )
}
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} interval={1500} onSelect={handleSelect}>
       
        <Carousel.Item>
          <div className='carousel-gradient'>
          <img
            className="d-block carousel-img img-fluid"
            src="images/assembly.jpg"
            alt=" slide"
          />  
          </div>
  
          
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-gradient'>
          <img
            className="d-block carousel-img img-fluid"
            src="images/football.jpg"
            alt=" slide"
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-gradient'>
          <img
            className="d-block carousel-img img-fluid"
            src="images/program.jpg"
            alt=" slide"
          />
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    );
}
  
export default Home;
