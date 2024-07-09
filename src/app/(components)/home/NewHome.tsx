import React from 'react'
import AboutHome from './about/AboutHome'
import TreatmentOpd from './treatment/TreatmentOpd'
import WhyChoose from './chooseUs/WhyChoose'
import Youtube from './youtube/Youtube'
import TestimonialHome from './testimonial/TestimonialHome'
import BlogsHome from './blogs/BlogsHome'
import SocialPost from './social/SocialPost'
import ApplyHome from './apply/ApplyHome'
import Brochure from './Brochure'

const NewHome = () => {
    return (
        <div>
            <AboutHome />
            <TreatmentOpd />
            <WhyChoose />
            <Youtube />
            <BlogsHome />
            <TestimonialHome />
            <SocialPost />
            <ApplyHome/>
            <Brochure />
            <a href="https://naiminath-ayurveda.vercel.app/"><div className="apply-now-form-nt">Apply Now</div></a>
        </div>
    )
}

export default NewHome
