import React from 'react';

const experiences = [
  {
    title: "Technical Executive at Google Developer Student Club (GDSC)",
    description: "As a Technical Executive at GDSC, I lead various tech initiatives and projects, organize workshops, and collaborate with peers to enhance the technical community at NIT Jaipur. My role involves mentoring students, conducting sessions on web development, and promoting coding contests."
  },
  {
    title: "Open Source Contributions",
    description: "I have actively contributed to many open-source projects as part of the GirlScript Summer of Code (GSSoC) 2024. One of my notable contributions was to the Sphinx website, which is part of Rajasthan's largest technical fest. I have also contributed to various other projects, helping to fix bugs, add features, and improve documentation."
  },
  {
    title: "Participation in RECKON 5.0 Hackathon",
    description: "I participated in the RECKON 5.0 hackathon and qualified for the final round. I secured a rank in the top 10 participants, showcasing my problem-solving skills and ability to innovate under pressure."
  }
];

const Experiences = () => {
  return (
    <section id="experiences" className="my-8">
      <h1 className="lg:text-[4vw] md:text-[5.5vw] text-[6.5vw] font-bold">Experiences</h1>
      <div className='border-[2px] flex flex-col p-[7%]'>
        {experiences.map((experience, index) => (
          <div key={index} className="mt-8">
            <h2 className="text-[3vw] font-semibold text-blue-600">{experience.title}</h2>
            <p className="lg:text-[2vw] md:text-[2.7vw] text-[3vw] mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
