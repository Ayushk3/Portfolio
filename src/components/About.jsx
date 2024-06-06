import React from 'react';

const About = () => {
    return (
        <section id="about" className="my-8">
            <h1 className="lg:text-[5vw] md:text-[6.5vw] text-[8vw] font-bold">About</h1>
            <div className='border-[2px] flex flex-col p-[7%]'>
                <p className="mt-4 lg:text-[2vw] md:text-[2.7vw] text-[3.5vw]">
                    <span className='text-green-600'>HI</span> 🙋 THERE! <br />
                    I'm Ayush Kumar <br />
                    I am a pre-Final Year Student pursuing a B.Tech in Computer Science and Engineering at<span className='text-red-500'> NIT Jaipur</span>. I have a deep passion for continuous learning and thrive on tackling challenging problems. My enthusiasm is particularly evident in my dedicated approach to Data Structures and Algorithms (DSA), Web Development, and Machine Learning, where I enjoy taking on complex problems and actively participate in coding contests to enhance my skills.
                </p>
                <a href="#contact" className="mt-4 w-[30%] flex  justify-center bg-blue-500 text-white px-4 py-2 rounded-md transition duration-500 hover:bg-blue-600">
                    📨 Contact Me
                </a>
            </div>
        </section>
    );
};

export default About;
