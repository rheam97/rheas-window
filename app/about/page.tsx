import React from "react";
import Menu from "../menu";
function About() {
    return (
        <div className="h-screen max-w-screen container bg-black text-white md:border-50 border-40 border-black overflow-auto">
            <Menu />
            <p className="p-6 sm:text-lg">I'm an aspiring Fullstack software engineer with 3 years of experience. I've been able to apply my Fullstack skills and knack for problem-solving to help various nonprofits raise hundreds of thousands of dollars for their fundraising campaigns. I'm constantly looking to expand my skillset within the field which is why I decided to become a fellow at Formation in order to understand the fundamentals of Computer Science with mentorship from industry-leading engineers shortly after completing a bootcamp. I also pursued coursework at the School for Poetic Computation (SFPC) where we dove into the historical origins of the field and the basics of electronics. <br></br><br></br> I just finished <em>PHP for Beginners</em> and <em>30 Days of Laravel</em> with Jeffrey Way in order to benefit from a framework with robust documentation and simplified backend architecture to further hone my understanding of backend fundamentals. <br></br><br></br>I'm looking forward to creating impactful, unique apps and collaborating with like-minded devs.
                Click <a href='/projects' className="font-bold transition duration-300 hover:text-indigo-500">here</a> to see some of my projects.</p>
            <div className="stack icons"></div>
        </div>
    )
}

export default About;