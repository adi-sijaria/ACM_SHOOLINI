import React from "react";
import 'animate.css/animate.min.css';

const About = () => {
  
  return (
    <div>
      <div id="about" className="flex flex-col md:flex-row lg:mx-20 my-4 animate__animated animate__fadeIn animate__slideInLeft">
        <div className="flex-1 -200 p-4 ">
          <h className="text-center text-3xl font-bold ">
            About Shoolini University
          </h>
          <p className="my-4 leading-7 ">
            Surrounded by leading academicians and professionals, Shoolini
            University, ​established in 2009, is a dynamic, research-focused
            institution consistently ​ranking among India&apos;s top 100
            universities. Situated in Solan, Himachal ​Pradesh, this
            not-for-profit, multi-disciplinary private university follows a
            ​unique research and innovation-led model, driving cutting-edge
            knowledge ​and contributing to social and economic upliftment. With
            internationally ​qualified faculty, a focus on student careers and
            placements, innovative ​pedagogy, and motivated students, Shoolini
            University stands out in the ​global knowledge economy. Emphasizing
            the creative potential of every ​student, it provides high-quality
            educational opportunities to shape the ​future and contribute to
            India's greatness.
          </p>
        </div>
        <div className="flex-1 -200 p-4 ">
          <img
            src="/assets/images/building.png"
            className="mx-auto my-4 h-90 w-150 object-cover "
            alt="Your Image"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:mx-20 my-4 animate__animated animate__fadeIn animate__slideInRight">
        <div className="flex-1 -200 p-4 ">
          <h className="text-center text-3xl font-bold ">
            About Shoolini University
          </h>
          <p className="my-4 leading-7 ">
          At ACM Shoolini University's student chapter, we are committed to ​establishing a dynamic and expansive platform that fosters global exposure ​to a diverse range of ideas and knowledge within the field of computing.
          Since our inception, we've been dedicated to igniting interest among ​students in computer science, providing them with opportunities to refine ​their skills and instilling a passion for research. Our efforts revolve around ​organizing events across various domains, featuring experienced speakers to ​inspire and guide students. The ACM Shoolini University Student Chapter is ​continually evolving and advancing toward greater excellence
          </p>
        </div>
        <div className="flex-1 -200 p-4">
          <div className=' h-50 w-50'>
          <img
            src="/assets/images/r.png"
            className="mx-auto my-4 h-50 w-50 object-cover "
            alt="Your Image"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
