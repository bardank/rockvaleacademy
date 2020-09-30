import React from 'react'

const Letter = () => {
    return (
        <div className='letter py-5'>
            <div className="row text-center">
                <div className="col-10  mx-auto">
                    <h3>Principal's Message</h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-10 mx-auto  letter-content">
                    <p>Dear Rockvale Secondary Students and Families,</p>
                    <br/>
                    <p>It is with great excitement that I write this letter of introduction to you as the Principal of Rockvale Secondary School.  I am honored to have the opportunity to lead a school with such persevering students, an extremely dedicated staff, and a supportive school community.  I feel very fortunate to be part of this school and to support the students and families. By focusing on a positive school culture, setting high standards for teacher performance, increased academic expectations for all students and engaging the community, it is our goal at Rockvale Secondary that all students are on track to be college and career ready without mediation.</p>
                    <br />
                    <p>We embrace the challenges of the future while we continue to cherish and celebrate the traditions of the past. Our remarkable staff, involved parents and committed students come together to make Rockvale Secondary School a wonderful, unique place.</p>
                    <br />
                    <p>
                    I view education as a life-long process and expect that I will continue to learn much about the uniqueness of Hillsdale this year and in the years to come.   Most importantly, I bring a belief that students are at the center of all school-related decisions.  I am excited to unite my experience, my openness to learn, and my child-centered approach to support our students.  Because the relationships between families and the school are vital to the success of our students, I encourage you to become involved in every way possible.  I look forward to meeting you soon!  
                    </p>
                    <br />
                    <div className='principal-img'>
                        <img src="images/principal.jpg" alt="principal-img" />
                        <h3 className='mt-3'>Sagar Giri</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Letter;
